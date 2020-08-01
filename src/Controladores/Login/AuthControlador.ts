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


        const consultUsuarioLogin = await pool.query('SELECT idUsuario,Nombres,Apellidos,FechaNacimiento,idProfesion,idSeguridadSocial' +
            ',idClasificacionEtnica,idTipoGenero,idExclusividad,idNivelAcademico,idTipoUsuario' +
            ',idUbicacion,idTipoPromotor,idEstadoValidacion,Contrasena FROM Usuario WHERE CorreoElectronico= ? ', [login.CorreoElectronico], function (err, result, fields) {


                if (err) { throw err };

                if (result.length > 0) {



                    console.log(result);
                    if (login.Contrasena == result[0].Contrasena) {
                        if (result[0].idEstadoValidacion == 1) {
                            var data = {
                                idUsuario: result[0].idUsuario,
                                Nombres: result[0].Nombres,
                                Apellidos: result[0].Apellidos,
                                FechaNacimiento: result[0].FechaNacimiento,
                                idProfesion: result[0].idProfesion,
                                idSeguridadSocial: result[0].idSeguridadSocial,
                                idClasificacionEtnica: result[0].idClasificacionEtnica,
                                idTipoGenero: result[0].idTipoGenero,
                                idExclusividad: result[0].idExclusividad,
                                idNivelAcademico: result[0].idNivelAcademico,
                                idTipoUsuario: result[0].idTipoUsuario,
                                idUbicacion: result[0].idUbicacion,
                                idTipoPromotor: result[0].idTipoPromotor

                            };
                            return res.json(ObtJWTValidacionesControlador.GetCrearTokenLogin(data));

                        } else {
                            return res.json({ Estado: "Bloqueado" });

                        }



                    } else {
                        return res.json({ Estado: "FalloContraseña" });


                    }


                }else{
                    return res.json({ Estado: "FalloCorreo" });
                }
            });







    }

    public async ValidarTokenLogin(req: Request, res: Response) {
         
        const {TokenLogin} = req.params;

       res.json(ObtJWTValidacionesControlador.ValidarToken(TokenLogin));

    };
       



        
       

    


}


export const Authsc = new Auths();