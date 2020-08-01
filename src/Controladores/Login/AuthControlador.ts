import { Request, Response } from 'express';
import pool from '../../database';

class Auths{
    public async Signup(req: Request, res: Response) {

        await pool.query('SELECT * FROM Profesion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        }); 

    }

}


export const Authsc = new Auths();