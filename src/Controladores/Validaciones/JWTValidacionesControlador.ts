import { Request, Response } from 'express';
import pool from '../../database';


const Contrasena = "Club99LoginRegister";

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





     public async Verificar(req: Request, res: Response) {

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

}

export const ObtJWTValidacionesControlador = new JWTValidacionesControlador();