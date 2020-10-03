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
    
    
    
        } else {
    
    
          const CrearCurso = await pool.query('SELECT * FROM Curso WHERE  idCurso in (Select idCurso FROM cursousuario where idUsuario = ? and idCurso = ?) ', [TokenLogin.idUsuario,req.body.idCurso], async function (err, result, fields) {
    
            if (err) { res.json(err) }
    
            else {
    
              res.json(result);
    
            }
          });
        }
    
    
    
    
      }

  
  

}


export const ObtMirarCursoContrller = new MirarCursoContrller();