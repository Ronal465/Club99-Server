import { Request, Response } from 'express';
import pool from '../../database';
import { ObtJWTValidacionesControlador } from "../../Controladores/Validaciones/JWTValidacionesControlador";
import{encriptacion} from "../../Incriptacion/Bcrypts";
class Auths{

    public async Login(req: Request, res: Response) {
         
        

        var login = {
            CorreoElectronico : req.body.CorreoElectronico,
            Contrasena : await encriptacion.encriptar(req.body.Contrasena) 
        }  
        console.log(login);
        console.log(login.Contrasena);

        const consultaempleado = await pool.query('SELECT idUsuario,Nombres,Apellidos,FechaNacimiento,idProfesion,idSeguridadSocial'+
                                                 ',idClasificacionEtnica,idTipoGenero,idExclusividad,idNivelAcademico,idTipoUsuario'+
                                                 ',idUbicacion,idTipoPromotor FROM Usuario WHERE CorreoElectronico= ? and Contrasena=?', [login.CorreoElectronico,login.Contrasena], function (err, result, fields) {
                                                

        
            if (err) { throw err };

            if (result.length > 0) {
                return res.json(ObtJWTValidacionesControlador.GetCrearTokenLogin(result));
            } else {
                return res.json({ Estado: "fallo"});
            }


        });
       



        
       

    }

    public async ValidarTokenLogin(req: Request, res: Response) {
         
        const {TokenLogin} = req.params;




    };
       



        
       

    


}


export const Authsc = new Auths();