import { Request, Response } from 'express';
import pool from '../../database';

class ValidacionesControlador {


    // Numero 16
    public async GetValidarCorreoElectronico(req: Request, res: Response): Promise<any> {

        const { CorreoElectronico } = req.params;

        const consultaempleado = await pool.query('SELECT CorreoElectronico FROM Usuario WHERE CorreoElectronico= ?', [CorreoElectronico], function (err, result, fields) {
            
            if (err) { throw err };

            if (result.length > 0) {
                
                res.json({ Estado: "Correcto"});

            } else {
                res.status(404).json({ Estado: "Fallo" });
            }



        });

    }



}

export const ObtValidacionesControlador = new ValidacionesControlador();