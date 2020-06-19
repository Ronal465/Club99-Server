import { Request, Response } from 'express';
import pool from '../database';

class ListarFormulariosControlador {


    public async GetListTipoGenero(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoGenero', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }




}

export const ObtListarFormulariosControlador = new ListarFormulariosControlador();