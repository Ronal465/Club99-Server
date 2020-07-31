import { Request, Response } from 'express';
import pool from '../../database';

const Contrasena = "Club99LoginRegister"; 

class JWTValidacionesControlador {

    

    // Numero 16
    public async GetCrearTokenLogin(req: Request, res: Response): Promise<any> {

        var jwt = require('jsonwebtoken')
        var bodyParser = require('body-parser')
    

        const {idUsuario} = req.params;

        const consultaempleado = await pool.query('SELECT idUsuario,Nombres,Apellidos,FechaNacimiento,idProfesion,idSeguridadSocial'+
                                                 ',idClasificacionEtnica,idTipoGenero,idExclusividad,idNivelAcademico,idTipoUsuario'+
                                                 ',idUbicacion,idTipoPromotor FROM Usuario WHERE idUsuario= ?', [idUsuario], function (err, result, fields) {
            
            if (err) { throw err };

            if (result.length > 0) {

     
                var tokenData = {
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

                var token = jwt.sign(tokenData, Contrasena, {
                    expiresIn: 60 * 60 * 24 // expires in 24 hours
                })
                return res.json({Estado :"Correcto",
                                 TokenLogin: token});

           
            } else { 
                res.status(404).json({ Estado: "Fallo" });
            }



        });

    }





}

export const ObtJWTValidacionesControlador = new JWTValidacionesControlador();