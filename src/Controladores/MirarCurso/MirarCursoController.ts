import { Request, Response } from 'express';
import pool from '../../database';
import { encriptacion } from "../../Incriptacion/Bcrypts";
import { ObtJWTValidacionesControlador } from "../Validaciones/JWTValidacionesControlador";
import { ObtEnviarCorreoController } from "../EnviarCorreo/ClassEnviarCorreoController";



class MirarCursoContrller {



  public async ObtenerMisCursos(req: Request, res: Response) {


    var TokenLogin = ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);




    if (TokenLogin.idUsuario == undefined) {



    } else {


      const CrearCurso = await pool.query('SELECT * FROM Curso WHERE  idCurso in (Select idCurso FROM cursousuario where idUsuario = ?) ', [TokenLogin.idUsuario], async function (err, result, fields) {

        if (err) { res.json(err) }

        else {

          res.json(result);

        }
      });
    }




  }
  public async ObtenerCursoUsuario(req: Request, res: Response) {

    var TokenLogin = ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);


    if (TokenLogin.idUsuario == undefined) {

      res.status(404).json();

    } else {


      const CrearCurso = await pool.query('SELECT * FROM Curso WHERE  idCurso in (Select idCurso FROM cursousuario where idUsuario = ? and idCurso = ?) ', [TokenLogin.idUsuario, req.body.idCurso], async function (err, result, fields) {

        if (err) { 
          res.status(404).json();
        };
     
        if (result.length > 0) {
            return res.json(result);
        }else{
           res.status(404).json();
        }
      });
    }




  }
  public async ObtenerProfesorCurso(req: Request, res: Response) {




    var idCurso = req.body.idCurso;

    const CrearCurso = await pool.query('SELECT * FROM ProfesorCurso WHERE  idUsuario in (Select idProfesor FROM Curso where idCurso = ?) ', [idCurso], async function (err, result, fields) {

      if (err) { res.json(err) }

      else {


        const CrearCurso = await pool.query('select Nombres,Apellidos from usuario where idUsuario = ? ', [result[0].idUsuario], async function (err, result2, fields) {

          if (err) { res.json(err) }

          else {
            console.log(result2);

            res.json({
              idProfesorCurso: result[0].idProfesorCurso,
              idUsuario: result[0].idUsuario,
              LinkImagenProfesor: result[0].LinkImagenProfesor,
              biografia: result[0].biografia,
              Nombres: result2[0].Nombres,
              Apellidos: result2[0].Apellidos
            });

          }
        });



      }
    });





  }
  public async PbtenerPreguntasCurso(req: Request, res: Response) {




    var idSeccionCurso = req.body.idSeccionCurso;

    const CrearCurso = await pool.query('SELECT * FROM PreguntasSeccion WHERE idSeccionCurso = ? ', [idSeccionCurso], async function (err, result, fields) {

      if (err) { res.json(err) }

      res.json(result);

    });





  }

  public async CrearPreguntaCurso(req: Request, res: Response) {

    var TokenLogin = ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);




    if (TokenLogin.idUsuario == undefined) {



    } else {

   var  Pregunta= {
      idPreguntasSeccion:null,
      Pregunta:req.body.Pregunta ,
      Respuesta:"",
      idSeccionCurso: req.body.idSeccionCurso,
      idUsuario:TokenLogin.idUsuario
    }

    console.log(Pregunta);

    const CrearPregunta = await pool.query('insert into PreguntasSeccion set ? ', [Pregunta], async function (err, result, fields) {

      if (err) { res.json(err) }

      res.json({mensaje:"Correcto"});

    });

  }




  }
  public async ObtenerInfoCursoUsuario(req: Request, res: Response) {

    var TokenLogin = ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);


   

      const CrearCurso = await pool.query('SELECT * FROM Curso  where idCurso = ? ', [req.body.idCurso], async function (err, result, fields) {

        if (err) { 
          res.status(404).json();
        };
     
        if (TokenLogin.idUsuario == undefined) {
        
          res.json(
            {
              Estado:"Fallo",
              Curso: result[0]
            }
          )

        }else{


          res.json(
            {
              Estado:"Correcto",
              Curso: result[0]
            }
          )

        }



      });
    




  }
  public async ValidarCursoAsignado(req: Request, res: Response) {

    var TokenLogin = ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);


   

      const CrearCurso = await pool.query('SELECT * FROM cursousuario  where idUsuario = ? and idCurso = ? ', [TokenLogin.idUsuario,req.body.idCurso], async function (err, result, fields) {

        if (err) { 
          res.status(404).json();
        };
     
        if (result.length > 0) {
          return res.json({Estado:"Asignado"});
       }else{
        return res.json({Estado:"Fallo"});
       }



      });
    




  }

  public async AgregarCursoFavoritos(req: Request, res: Response) {

    var TokenLogin = ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);


    

      const CrearCurso = await pool.query('insert into cursousuario  set ? ', [{
        idCursoUsuario:null,
        idUsuario: TokenLogin.idUsuario,
        idCurso: req.body.idCurso
      }], async function (err, result, fields) {

        if (err) { 
          res.status(404).json();
        };
     
        res.json({Estado: "Correcto"});



      });
    




  }

  public async QuitarCursoFavoritos(req: Request, res: Response) {

    var TokenLogin = ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);


    

      const CrearCurso = await pool.query('delete from cursousuario  where  idUsuario = ? and idCurso = ? ', [
      
        TokenLogin.idUsuario,
        req.body.idCurso
      ], async function (err, result, fields) {

        if (err) { 
          res.status(404).json();
        };
     
        res.json({Estado: "Correcto"});



      });
    




  }
  public async GetPreguntasProfesor(req: Request, res: Response) {

    var TokenLogin = ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);


      const CrearCurso = await pool.query('select * from preguntasseccion  where Respuesta = ""  and idSeccionCurso in (select idSeccionCurso from seccioncurso where  idCurso in (select idCurso from curso where idProfesor = ? )) ', [
        TokenLogin.idUsuario,
      ], async function (err, result, fields) {

        if (err) { 
          res.status(404).json();
        };
     
        res.json(result);



      });
    




  }
  public async ResponderPreguntasProfesor(req: Request, res: Response) {

    console.log(req.body)

      const CrearCurso = await pool.query('Update preguntasseccion set ?   where idPreguntasSeccion = ? ', [
        req.body,
        req.body.idPreguntasSeccion
      ], async function (err, result, fields) {

        if (err) { 
          res.status(404).json();
        };
     
        res.json(result);



      });
    




  }


}


export const ObtMirarCursoContrller = new MirarCursoContrller();