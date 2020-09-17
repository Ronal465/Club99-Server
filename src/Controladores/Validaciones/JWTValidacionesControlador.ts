import { Request, Response } from 'express';
import pool from '../../database';


const Contrasena = "Club99LoginRegister";
const ContrasenaRegister = "Club99LoginRegisterRegister";
const ContrasenaRecupearContrasena = "Club99LoginRegisterContrasena";

class JWTValidacionesControlador {



    // Numero 16
    public  GetCrearTokenLogin(result: any) {

        var jwt = require('jsonwebtoken');
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
    public  GetCrearTokenRegister(result: any) {

        var jwt = require('jsonwebtoken');
        var bodyParser = require('body-parser')

        var tokenData = result;

        var token :any= jwt.sign(tokenData, ContrasenaRegister, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        })
         return {
                TokenLogin: token
                };

    }
    public  GetCrearTokenRecuperarContrasena(result: any) {

        var jwt = require('jsonwebtoken');
        var bodyParser = require('body-parser')

        var tokenData = result;

        var token :any= jwt.sign(tokenData, ContrasenaRecupearContrasena, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        })
         return {
                TokenLogin: token
            };

    }
    public VerificarRegister(Token:any){
        const jwt = require('jsonwebtoken');
        const jwtDecode = require('jwt-decode');

        try {
            
           var token = jwt.verify(Token, ContrasenaRegister);
           var decoded = jwtDecode(Token);
            return decoded;

         } catch(err) {
            decoded = {};

            return decoded;
    
         }

    }
    public VerificarLoginToken(Token:any){
      const jwt = require('jsonwebtoken');
      const jwtDecode = require('jwt-decode');

      try {
          
         var token = jwt.verify(Token, Contrasena);
         var decoded = jwtDecode(Token);
          return decoded;

       } catch(err) {
          decoded = {};

          return decoded;
  
       }

  }
    public VerificarRecuperar(Token:any){
        const jwt = require('jsonwebtoken');
        const jwtDecode = require('jwt-decode');

        try {
            
           var token = jwt.verify(Token, ContrasenaRecupearContrasena);
           var decoded = jwtDecode(Token);
            return decoded;

         } catch(err) {
            decoded = {};

            return decoded;
    
         }

    }
    public async VerificarRecuperarContrasena(req: Request, res: Response) {

 

        const jwt = require('jsonwebtoken');
        const jwtDecode = require('jwt-decode');

        try {
            
           var token = jwt.verify(req.body.TokenRecuperar, ContrasenaRecupearContrasena);
           var decoded = jwtDecode(req.body.TokenRecuperar);
            res.json({ Estado: "Correcto",
            idTipoUsuario: decoded.idTipoUsuario});

         } catch(err) {
           
            res.json({ Estado: "Fallo"});
    
         }

    }
    public async VerificarLogin(req: Request, res: Response) {


      const jwt = require('jsonwebtoken');
      const jwtDecode = require('jwt-decode');

      try {
          
         var token = jwt.verify(req.body.TokenLogin, Contrasena);
         var decoded = jwtDecode(req.body.TokenLogin);
          res.json({ Estado: "Correcto",
          idTipoUsuario: decoded.idTipoUsuario});

       } catch(err) {
         
          res.json({ Estado: "Fallo"});
  
       }

  }
   public async VerificarCrearUsuario(req: Request, res: Response) {


      const jwt = require('jsonwebtoken');

      try {
         
         var token = jwt.verify(req.body.TokenRegister, ContrasenaRegister);
         
         res.json({ Estado: "Correcto"});

      } catch(err) {
         
         res.json({ Estado: "Fallo"});

      }

   }

}

export const ObtJWTValidacionesControlador = new JWTValidacionesControlador();