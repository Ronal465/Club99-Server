import { Request, Response } from 'express';
import pool from '../../database';


const Contrasena = "Club99LoginRegister";

class JWTValidacionesControlador {



    // Numero 16
    public  GetCrearTokenLogin(result: any) {

        var jwt = require('jsonwebtoken')
        var bodyParser = require('body-parser')

        var tokenData = result;

        var token :any= jwt.sign(tokenData, Contrasena, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        })
         return {
                Estado: "Correcto",
                TokenLogin: token
            };

    }



    public ValidarToken(TokenLogin: any){

        var jwt = require('jsonwebtoken')
        var bodyParser = require('body-parser')

            var token = TokenLogin.headers['authorization']
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