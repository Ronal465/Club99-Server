import { Request, Response } from 'express';
import pool from '../../database';
import { ObtJWTValidacionesControlador } from "../Validaciones/JWTValidacionesControlador";

class InicioControlador {


    public async ListCursosGratis(req: Request, res: Response) {

        const ListaGratis = await pool.query('Select * from Curso where idCurso in' +
            '(Select idCurso from FiltroCurso where idFiltro = 0 and idTipoFiltro = 1)', function (err, resultGratis, fields) {

                res.json(resultGratis);

            });

    }

    public async ListCursosEtnicos(req: Request, res: Response) {


        var TokenLogin = await ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
       

        var idFiltro = TokenLogin.idClasificacionEtnica;

        if (TokenLogin.idClasificacionEtnica != undefined) {

            const ListaEtnica = await pool.query('Select * from Curso where idCurso in' +
                '(Select idCurso from FiltroCurso where idFiltro = ? and idTipoFiltro = 3)', [idFiltro], function (err, ListaEtnica, fields) {

                    res.json(ListaEtnica);
                   

                });

        } else {
            res.json([]);
        }

    }

    public async ListCursosExclusivos(req: Request, res: Response) {


        var TokenLogin = await ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
       

        var idExclusividad = TokenLogin.idExclusividad;

        if (TokenLogin.idExclusividad != undefined) {

            const ListaEtnica = await pool.query('Select idTipoExclusividad from exclusividad where idExclusividad = ?', [idExclusividad], async function (err, result, fields) {

                var idTipoExclusivo = result[0].idTipoExclusividad;


                if (idTipoExclusivo == 1) {

                    res.json([]);
                    console.log("Nada");


                } else {
                    if (idTipoExclusivo == 2) {
                        const ListaExclusivos = await pool.query('Select * from Curso where idCurso in' +
                            '(Select idCurso from FiltroCurso where (idFiltro = 2) and idTipoFiltro = 2)', [idTipoExclusivo], function (err, ListaExclusivos, fields) {

                                res.json(ListaExclusivos);
                                console.log(ListaExclusivos);

                            });
                    } else if (idTipoExclusivo == 3) {
                        const ListaExclusivos = await pool.query('Select * from Curso where idCurso in' +
                            '(Select idCurso from FiltroCurso where (idFiltro = 2 or idFiltro = 3) and idTipoFiltro = 2)', [idTipoExclusivo], function (err, ListaExclusivos, fields) {

                                res.json(ListaExclusivos);
                                console.log(ListaExclusivos);

                            });
                    } else if (idTipoExclusivo == 4) {
                        const ListaExclusivos = await pool.query('Select * from Curso where idCurso in' +
                            '(Select idCurso from FiltroCurso where (idFiltro = 2 or idFiltro = 3 or idFiltro = 4) and idTipoFiltro = 2)', [idTipoExclusivo], function (err, ListaExclusivos, fields) {

                                res.json(ListaExclusivos);
                                console.log(ListaExclusivos);

                            });
                    } else if (idTipoExclusivo == 5) {
                        const ListaExclusivos = await pool.query('Select * from Curso where idCurso in' +
                            '(Select idCurso from FiltroCurso where (idFiltro = 2 or idFiltro = 3 or idFiltro = 4 or idFiltro = 5)  and idTipoFiltro = 2)', [idTipoExclusivo], function (err, ListaExclusivos, fields) {

                                res.json(ListaExclusivos);
                                console.log(ListaExclusivos);
                            });
                    }
                }

            });

        } else {
            res.json([]);
        }

    }

    public async ConsultProfesor(req: Request, res: Response) {


        const ProfesorLista = await pool.query('SELECT idUsuario,Nombres,Apellidos FROM Usuario WHERE idUsuario = ?', [req.body.idProfesor], function (err, Profesor, fields) {

            res.json(Profesor);

        });



    }

    public async ConsultFiltros(req: Request, res: Response) {


        const ListaFiltros = await pool.query('SELECT idFiltroCurso,idTipoFiltro,idFiltro FROM filtrocurso WHERE idCurso = ?', [req.body.idCurso], function (err, Filtros, fields) {

            res.json(Filtros);

        });



    }

    public async ConsultFiltroNombre(req: Request, res: Response) {

        var idTipoFiltro = req.body.idTipoFiltro;
        var idFiltro = req.body.idFiltro;

        

        if (idTipoFiltro == 1) {
            res.json({ Nombre: "Gratis" })
        } else if (idTipoFiltro == 2) {
            const Filtro = await pool.query('SELECT Nombre FROM tipoexclusividad WHERE idTipoExclusividad = ?', [idFiltro], function (err, NombreFiltro, fields) {

                res.json({ Nombre: NombreFiltro[0].Nombre });

            });

        } else if (idTipoFiltro == 3) {
            const Filtro = await pool.query('SELECT Nombre FROM clasificacionetnica WHERE idClasificacionEtnica = ?', [idFiltro], function (err, NombreFiltro, fields) {


                res.json({ Nombre: NombreFiltro[0].Nombre });

            });

        }







    }


}







export const ObtInicioControlador = new InicioControlador();