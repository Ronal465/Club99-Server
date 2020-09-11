import { Request, Response } from 'express';
import pool from '../../database';

class ValidacionesControlador {


    // Numero 16
    public async PostValidarCorreoElectronico(req: Request, res: Response): Promise<any> {

        const  CorreoElectronico  = req.body.CorreoElectronico;

        const consultaempleado = await pool.query('SELECT CorreoElectronico FROM Usuario WHERE CorreoElectronico= ?', [CorreoElectronico], function (err, result, fields) {
            
            if (err) { throw err };

            if (result.length > 0) {
                res.json({ Estado: "fallo"});
                
            } else {
                res.json({ Estado: "Correcto"});

            }



        });

    }

    public async PostValidarIdentificacion(req: Request, res: Response): Promise<any> {

        const  NumeroIdentificacion  = req.body.NumeroIdentificacion;

        const consultaempleado = await pool.query('SELECT NumeroIdentificacion FROM Usuario WHERE NumeroIdentificacion= ?', [NumeroIdentificacion], function (err, result, fields) {
            
            if (err) { throw err };

            if (result.length > 0) {
                res.json({ Estado: "fallo"});
                
            } else {
                res.json({ Estado: "Correcto"});

            }



        });

    }

}

export const ObtValidacionesControlador = new ValidacionesControlador();