import { Request, Response } from 'express';
import pool from '../../database';
import { ObtJWTValidacionesControlador } from "../../Controladores/Validaciones/JWTValidacionesControlador";
import { encriptacion } from "../../Incriptacion/Bcrypts";


class Auths {

    public async Login(req: Request, res: Response) {



        var login = {
            CorreoElectronico: req.body.CorreoElectronico,
            Contrasena: await encriptacion.encriptar(req.body.Contrasena)

        }

 
        const consultUsuarioLogin = await pool.query('SELECT idUsuario,Nombres,Apellidos,FechaNacimiento,idProfesion' +
            ',idClasificacionEtnica,idTipoGenero,idNivelAcademico,idTipoUsuario' +
            ',idTipoPromotor,idEstadoValidacion,Contrasena FROM Usuario WHERE CorreoElectronico= ? ', [login.CorreoElectronico], async function (err, result, fields) {


                if (err) { throw err };

                if (result.length > 0) {

                    var idUbicacion;
                    var idExclusividad;

                    await pool.query('SELECT idUbicacion FROM ubicacion WHERE idUsuario = ? ', [result[0].idUsuario], async function (err, resulta, fields) {
                        if (err) throw err;

                        await pool.query('SELECT idExclusividad FROM exclusividad WHERE idUsuario = ? ', [result[0].idUsuario], function (err, resultad, fields) {
                            if (err) throw err;
                            idExclusividad = resultad[0].idExclusividad;
                            idUbicacion = resulta[0].idUbicacion;
                            if (login.Contrasena == result[0].Contrasena) {
                                if (result[0].idEstadoValidacion == 1 ||result[0].idEstadoValidacion == 2)  {
                                    var data = {
                                        idUsuario: result[0].idUsuario,
                                        Nombres: result[0].Nombres,
                                        Apellidos: result[0].Apellidos,
                                        FechaNacimiento: result[0].FechaNacimiento,
                                        idProfesion: result[0].idProfesion,
                                        idClasificacionEtnica: result[0].idClasificacionEtnica,
                                        idTipoGenero: result[0].idTipoGenero,
                                        idExclusividad: idUbicacion,
                                        idNivelAcademico: result[0].idNivelAcademico,
                                        idTipoUsuario: result[0].idTipoUsuario,
                                        idUbicacion: idUbicacion,
                                        idTipoPromotor: result[0].idTipoPromotor
                                    };

                                                 console.log(ObtJWTValidacionesControlador.GetCrearTokenLogin(data));

                                    return res.json(ObtJWTValidacionesControlador.GetCrearTokenLogin(data));

                                } else {
                                    return res.json({ Estado: "Bloqueado" });

                                }



                            } else {
                                return res.json({ Estado: "FalloContraseña" });
                            }

                        });


                    });








                } else {
                    return res.json({ Estado: "FalloCorreo" });
                }
            });







    }

  










}


export const Authsc = new Auths();