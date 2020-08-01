import { Request, Response } from 'express';
import pool from '../../database';

class Auths{

    public async Login(req: Request, res: Response) {
         
        

        var login = {
            CorreoElectronico : req.body.CorreoElectronico,
            Contrasena : req.body.Contrasena
        }  
        console.log(login);

        const consultaempleado = await pool.query('SELECT idUsuario,Nombres,Apellidos,FechaNacimiento,idProfesion,idSeguridadSocial'+
                                                 ',idClasificacionEtnica,idTipoGenero,idExclusividad,idNivelAcademico,idTipoUsuario'+
                                                 ',idUbicacion,idTipoPromotor FROM Usuario WHERE CorreoElectronico= ? and Contrasena=?', [login.CorreoElectronico,login.Contrasena], function (err, result, fields) {
                                                

        
            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result);
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