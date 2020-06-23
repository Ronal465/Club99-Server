import { Request, Response } from 'express';
import pool from '../database';

class ListarFormulariosControlador {


    public async getListTipoGenero(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoGenero', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    };
    public async getProfesion(req: Request, res: Response) {

        await pool.query('SELECT * FROM Profesion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        }); 

    }
    public async getEtnia(req: Request, res: Response) {

        await pool.query('SELECT * FROM ClasificacionEtnica', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async getTipoIdentificacion(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoIdentificacion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async getEstadoValidacion(req: Request, res: Response) {

        await pool.query('SELECT * FROM EstadoValidacion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async getTipoUsuario(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoUsuario', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async getTipoSeguridadSocial(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoSeguridadSocial', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async getExclusividad(req: Request, res: Response){

        await pool.query(`SELECT tipoexclusividad.Nombre, exclusividad.fechainicio, exclusividad.fechafinal FROM exclusividad,tipoexclusividad WHERE idExclusividad = ${req.params.idExclusividad}`, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    

    public async getPais(req: Request, res: Response) {

        await pool.query('SELECT * FROM pais', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }
    public async getDepartamento(req: Request, res: Response){

        await pool.query(`SELECT idDepartamento, Nombre FROM departamento WHERE FkPais = ${req.params.idExclusividad}`, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async getCiudad(req: Request, res: Response){

        await pool.query(`SELECT idCiudad, Nombre FROM ciudad WHERE FkDepartamento = ${req.params.idExclusividad}`, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }
    public async getFuncionTipoUsuario(req: Request, res: Response){

        await pool.query(`SELECT idFuncionTipoUsuario, Nombre FROM FuncionTipoUsuario WHERE FkTipoUsuario = ${req.params.idExclusividad}`, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });
    }

    

    




}

export const ObtListarFormulariosControlador = new ListarFormulariosControlador();