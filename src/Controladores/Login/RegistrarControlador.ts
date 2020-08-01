import { Request, Response } from 'express';
import pool from '../../database';
import { encriptacion } from "../../Incriptacion/Bcrypts";

class RegistrarControlador {

    public async RegistrarUsuario(req: Request, res: Response) {

       
          await  pool.query('INSERT INTO usuario set=',[req.body]);
          console.log(req.body);
          res.json({message: 'guardado'});	


    }

    
       

 

        
       

    


}


export const Registro = new RegistrarControlador();