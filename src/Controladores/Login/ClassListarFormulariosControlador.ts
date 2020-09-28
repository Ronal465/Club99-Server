import { Request, Response } from 'express';
import pool from '../../database';

class ListarFormulariosControlador {


    // Numero 1
    public async GetListProfesion(req: Request, res: Response) {

        await pool.query('SELECT * FROM Profesion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    // Numero 2
    public async GetListTipoGenero(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoGenero', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    // Numero 3
    public async GetListNivelAcademico(req: Request, res: Response) {

        await pool.query('SELECT * FROM nivelacademico', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    // Numero 4
    public async GetListTipoIdentificacion(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoIdentificacion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    // Numero 5 
    public async GetListEstadoValidacion(req: Request, res: Response) {

        await pool.query('SELECT * FROM EstadoValidacion', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    //  Numero 6
    public async GetListTipoUsuario(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoUsuario', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    // Numero 7
    public async GetListTipoSeguridadSocial(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoSeguridadSocial', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    // Numero 8
    public async GetListPaises(req: Request, res: Response) {

        await pool.query('SELECT * FROM Pais', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    // Numero 9
    public async GetListDepartamento(req: Request, res: Response): Promise<any> {

        const { idPais } = req.params;


        const consultaempleado = await pool.query('SELECT * FROM Departamento WHERE idPais= ?', [idPais], function (err, result, fields) {
            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result);
            } else {
                res.status(404).json({ Estado: "Fallo" });
            }


        });

    }

    // Numero 10
    public async GitListCiudad(req: Request, res: Response): Promise<any> {

        const { idDepartamento } = req.params;


        const consultaempleado = await pool.query('SELECT * FROM Ciudad WHERE idDepartamento= ?', [idDepartamento], function (err, result, fields) {
            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result);
            } else {
                res.status(404).json({ Estado: "Fallo" });
            }



        });

    }

    // Numero 11
    public async GetListFuncionesTipoUsuario(req: Request, res: Response): Promise<any> {

        const { idTipoUsuario } = req.params;


        const consultaempleado = await pool.query('SELECT idFuncionTipoUsuario,Nombre FROM FuncionTipoUsuario WHERE idTipoUsuario= ?', [idTipoUsuario], function (err, result, fields) {

            if (err) { throw err };

            if (result.length > 0) {

                var JSonAcomodado = result;

                res.json(result);

            } else {
                res.status(404).json({ Estado: "Fallo" });
            }



        });

    }

    // Numero 12
    public async GetListTipoPromotor(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoPromotor', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    // Numero 13
    public async GetListTipoExclusividad(req: Request, res: Response) {

        await pool.query('SELECT * FROM TipoExclusividad', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }


    // Numero 18
    public async GetListEtnia(req: Request, res: Response) {

        await pool.query('SELECT * FROM ClasificacionEtnica', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }


    // Numero 
    public async GetListPromotor(req: Request, res: Response) {

        await pool.query('SELECT * FROM tipopromotor', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }

    // Numero
    public async GetListTiposUsuarios(req: Request, res: Response) {

        await pool.query('SELECT * FROM tipousuario where idtipousuario != 1', function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        });

    }


    // Numero
    public async GetUsuario(req: Request, res: Response) {

        const { idUsuario } = req.params;


        await pool.query('SELECT * FROM usuario  where  idUsuario = ?' , [idUsuario],function (err, result, fields) {

            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result[0]);
            } else {

                res.status(404).json({ text: "El Usuario No Existe" });

            }
        });

    }
    public async GetUsaurioUbicacion(req: Request, res: Response) {

        const { idUsuario } = req.params;


        await pool.query('SELECT * FROM ubicacion  where  idUsuario = ?' , [idUsuario],function (err, result, fields) {

            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result[0]);
            } else {

                res.status(404).json({ text: "El Usuario No Existe" });

            }
        });

    }
    public async GetUsaurioSeguridadSocial(req: Request, res: Response) {

        const { idUsuario } = req.params;


        await pool.query('SELECT * FROM seguridadsocial  where  idUsuario = ?' , [idUsuario],function (err, result, fields) {

            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result[0]);
            } else {

                res.status(404).json({ text: "El Usuario No Existe" });

            }
        });

    }
    public async GetUsaurioExclusividad(req: Request, res: Response) {

        const { idUsuario } = req.params;


        await pool.query('SELECT * FROM exclusividad  where  idUsuario = ?' , [idUsuario],function (err, result, fields) {

            if (err) { throw err };

            if (result.length > 0) {
                return res.json(result[0]);
            } else {

                res.status(404).json({ text: "El Usuario No Existe" });

            }
        });

    }
}

export const ObtListarFormulariosControlador = new ListarFormulariosControlador();