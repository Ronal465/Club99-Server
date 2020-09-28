import { Request, Response } from 'express';
import pool from '../../database';
import { encriptacion } from "../../Incriptacion/Bcrypts";
import { ObtJWTValidacionesControlador } from "../../Controladores/Validaciones/JWTValidacionesControlador";
import { ObtEnviarCorreoController } from "../../Controladores/EnviarCorreo/ClassEnviarCorreoController";



class RegistrarControlador {


  public async RegistrarUsuarioToken(req: Request, res: Response) {


    var TokenRegister = [{
      idUsuario: null,
      Nombres: req.body[0].Nombres,
      Apellidos: req.body[0].Apellidos,
      FechaNacimiento: req.body[0].FechaNacimiento,
      idTipoIdentificacion: req.body[0].idTipoIdentificacion,
      NumeroIdentificacion: req.body[0].NumeroIdentificacion,
      idProfesion: req.body[0].idProfesion,
      idClasificacionEtnica: req.body[0].idClasificacionEtnica,
      CorreoElectronico: req.body[0].CorreoElectronico,
      Contrasena: encriptacion.encriptar(req.body[0].Contrasena),
      idTipoGenero: req.body[0].idTipoGenero,
      idNivelAcademico: req.body[0].idNivelAcademico,
      Telefono: req.body[0].Telefono,
      idEstadoValidacion: 2,
      idTipoUsuario: 2,
      idTipoPromotor: 1,
      FechaCreacion: new Date().toJSON().slice(0, 10)
    }, {
      idSeguridadSocial: null,
      idTipoSeguridadSocial: req.body[1].idTipoSeguridadSocial,
      Descripcion: req.body[1].Descripcion
    }, {
      idUbicacion: null,
      idPais: req.body[2].idPais,
      idCiudad: req.body[2].idCiudad,
      idDepartamento: req.body[2].idDepartamento,
      Direccion: req.body[2].Direccion,
    }, {
      idExclusividad: null,
      idTipoExclusividad: 1,
      FechaInicio: new Date().toJSON().slice(0, 10),
      FechaFinal: new Date().toJSON().slice(0, 10)
    }];

    var TokenRegisterDone = await ObtJWTValidacionesControlador.GetCrearTokenRegister({ TokenRegister });
    ObtEnviarCorreoController.CrearUsuarioCorreo(TokenRegisterDone.TokenLogin, req.body[0].CorreoElectronico);


    res.json({ Estado: "Correcto" });


  }

  public async RegistrarUsuario(req: Request, res: Response) {

    var TokenRegister = ObtJWTValidacionesControlador.VerificarRegister(req.body.TokenRegister);

    console.log(JSON.stringify(TokenRegister));

    if (TokenRegister.TokenRegister == undefined) {
      res.json({ Estado: "FalloToken" });

    } else {
      var idUsuario = 0;
      console.log(TokenRegister);
      const UsuarioCreado = await pool.query('INSERT INTO usuario set ? ', [TokenRegister.TokenRegister[0]], async function (err, result, fields) {

        if (err) { res.json({ err: err }) }

        else {

          const consultaempleado = await pool.query('SELECT idUsuario FROM Usuario WHERE NumeroIdentificacion= ?', [TokenRegister.TokenRegister[0].NumeroIdentificacion], async function (err, resulta, fields) {

            if (err) { res.json({ err: err }) }

            else if (resulta.length > 0) {

              var idUsuario = resulta[0];

              const SeguridadSocial = await pool.query('INSERT INTO SeguridadSocial set ? ,? ', [TokenRegister.TokenRegister[1], idUsuario], async function (err, result, fields) {

                if (err) { res.json({ err: err }) }

                else {

                  const Ubicacion = await pool.query('INSERT INTO Ubicacion set ?,? ', [TokenRegister.TokenRegister[2], idUsuario], async function (err, result, fields) {

                    if (err) { res.json({ err: err }) }

                    else {

                      const Exclusividad = await pool.query('INSERT INTO Exclusividad set ?,? ', [TokenRegister.TokenRegister[3], idUsuario], async function (err, result, fields) {

                        if (err) { res.json({ err: err }) }

                        else {

                          res.json({ Estado: "Correcto" });

                        }

                      });

                    }


                  });

                }

              });

            }

          });

        }

      });
    }




  }

  public async RecupearContraseñaToken(req: Request, res: Response) {



    const consultaempleado = await pool.query('SELECT idUsuario FROM Usuario WHERE CorreoElectronico= ?', [req.body.CorreoElectronico], async function (err, result, fields) {

      if (err) { res.json({ err: err }) }
      else if (result.length > 0) {
        var idUsuario = result[0].idUsuario;
        var TokenRecuperarContrasenaDone = await ObtJWTValidacionesControlador.GetCrearTokenRecuperarContrasena({ idUsuario });
        ObtEnviarCorreoController.RecuperarContraseña(TokenRecuperarContrasenaDone.TokenLogin, req.body.CorreoElectronico);
        res.json({ Estado: "Correcto" });

      }


    });






  }

  public async RecupearContraseña(req: Request, res: Response) {

    var TokenRecuperar = ObtJWTValidacionesControlador.VerificarRecuperar(req.body.TokenRecuperar);



    if (TokenRecuperar.idUsuario == undefined) {
      res.json({ Estado: "FalloToken" });

    } else {

      var Contrasena = { Contrasena: await encriptacion.encriptar(req.body.Contrasena) };


      const UsuarioCreado = await pool.query('UPDATE usuario set ?  where idUsuario = ?', [Contrasena, TokenRecuperar.idUsuario], async function (err, result, fields) {

        if (err) { res.json({ err: err }) } else {
          res.json({ "Message": "Que visaje la vida mi so" })
        }


      });
    }




  }


  public async PostCrearProfesor(req: Request, res: Response) {


    const CrearProfesor = await pool.query('INSERT INTO profesorcurso set ? ', [req.body], async function (err, result, fields) {

      if (err) { res.json({ err: err }) }

      else {

        res.json({ Estado: "Correcto" });

      }
    });





  }
  public async PostExperienciaProfesor(req: Request, res: Response) {


    req.body.forEach (  async (element: any)  => {
      
      const Crearexperienciaprofesor = await pool.query('INSERT INTO experienciaprofesor set ? ', [element], async function (err, result, fields) {

        if (err) { res.json({ err: err }) }
  
        else {
  
         console.log("Correcto");
  
        }
      });
  

    });

  




  }
  public async PostActualizarUsuario(req: Request, res: Response) {


    await pool.query('Update  usuario set ? WHERE idUsuario = ? ', [req.body, req.body.idUsuario], function (err, result, fields) {
      if (err) throw err;
      res.json("Correcto");
    });

  }
  public async PostActualizarUsuarioSeguridadSocial(req: Request, res: Response) {

    await pool.query('Update  seguridadsocial set ? WHERE idUsuario = ? ', [req.body, req.body.idUsuario], function (err, result, fields) {
      if (err) throw err;
      res.json("Correcto");
    });

  }
  public async PostActualizarUsuarioExclusividad(req: Request, res: Response) {

    await pool.query('Update  exclusividad set ? WHERE idUsuario = ? ', [req.body, req.body.idUsuario], function (err, result, fields) {
      if (err) throw err;
      res.json("Correcto");
    });

  }
  public async PostActualizarUsuarioUbicacion(req: Request, res: Response) {

    await pool.query('Update  ubicacion set ? WHERE idUsuario = ? ', [req.body, req.body.idUsuario], function (err, result, fields) {
      if (err) throw err;
      res.json("Correcto");
    });

  }
  public async PostActualizarUsuarioContrasena(req: Request, res: Response) {

    var Contrasena = { Contrasena: await encriptacion.encriptar(req.body.Contrasena) };

      console.log(req.body);
      console.log(Contrasena);

    await pool.query('Update  usuario set ? WHERE idUsuario = ? ', [{Contrasena:Contrasena.Contrasena}, req.body.idUsuario], function (err, result, fields) {
      if (err) throw err;
      res.json("Correcto");
    });

  }
}


export const Registro = new RegistrarControlador();