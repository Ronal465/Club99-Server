import { Request, Response } from 'express';
import pool from '../../database';


const Contrasena = "Club99LoginRegister";

class JWTValidacionesControlador {



    // Numero 16
    public  GetCrearTokenLogin(result: any) {

        var jwt = require('jsonwebtoken')
        var bodyParser = require('body-parser')

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

        var token :any= jwt.sign(tokenData, Contrasena, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        })
         return {
                Estado: "Correcto",
                TokenLogin: token
            };

    }



    public ValidarToken(result: any){

        var jwt = require('jsonwebtoken')
        var bodyParser = require('body-parser')

            var token = result.TokenLogin.headers['authorization']
            if (!token) {
                return {
                    Estado: "Fallo"
                };
    
            }
          
            token = token.replace('Bearer ', '')
          
            jwt.verify(token, Contrasena, function(err: any, token: any) {
              if (err) {
                return {
                    Estado: "Fallo"
                };
              } else {
                return {
                    Estado: "Correcto",
                    TokenLogin: token
                };
              }});
            
    }






}

export const ObtJWTValidacionesControlador = new JWTValidacionesControlador();