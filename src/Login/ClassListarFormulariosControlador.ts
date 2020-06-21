import { Request, Response } from 'express';
import pool from '../database';

class ListarFormulariosControlador {


    public async GetListTipoGenero(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoGenero', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async GetProfesion(req: Request, res: Response) {

        await pool.query('SELECT * FROM Profesion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        }); 

    }
    public async GetEtnia(req: Request, res: Response) {

        await pool.query('SELECT * FROM ClasificacionEtnica', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async GetTipoIdentificacion(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoIdentificacion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async GetEstadoValidacion(req: Request, res: Response) {

        await pool.query('SELECT * FROM EstadoValidacion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async GetTipoUsuario(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoUsuario', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async GetTipoSeguridadSocial(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoSeguridadSocial', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }




}

export const ObtListarFormulariosControlador = new ListarFormulariosControlador();