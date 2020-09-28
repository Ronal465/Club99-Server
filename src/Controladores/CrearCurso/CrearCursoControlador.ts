import { Request, Response } from 'express';
import pool from '../../database';
import { encriptacion } from "../../Incriptacion/Bcrypts";
import { ObtJWTValidacionesControlador } from "../Validaciones/JWTValidacionesControlador";
import { ObtEnviarCorreoController } from "../EnviarCorreo/ClassEnviarCorreoController";



class CrearCursoControlador {




  public async PostCrearCurso(req: Request, res: Response) {


    var TokenLogin = ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);



    if (TokenLogin.idUsuario == undefined) {

      res.json(req.body);

    } else if (TokenLogin.idTipoUsuario == "3") {

      req.body.Curso.idProfesor = TokenLogin.idUsuario;
      console.log(req.body.Curso);

      const CrearCurso = await pool.query('INSERT INTO curso set ? ', [req.body.Curso], async function (err, result, fields) {

        if (err) { res.json({ err: err }) }

        else {

          res.json({ Estado: "Correcto" });

        }
      });
    }




  }

  public async PostCrearSeccion(req: Request, res: Response) {


      const CrearCurso = await pool.query('INSERT INTO seccioncurso set ? ', [req.body], async function (err, result, fields) {

        if (err) { res.json({ err: err }) }

        else {

          res.json({ Estado: "Correcto" });

        }
      });
    




  }

  public async PutEditarCurso(req: Request, res: Response) {

    await pool.query('Update  Curso set ? WHERE idCurso = ? ', [req.body, req.body.idCurso], function (err, result, fields) {
      if (err) throw err;
      res.json("Correcto");
    });

  }

  public async PutEditarSeccion(req: Request, res: Response) {

    await pool.query('Update  seccioncurso set ? WHERE idSeccionCurso = ? ', [req.body, req.body.idSeccionCurso], function (err, result, fields) {
      if (err) throw err;
      res.json("Correcto");
    });

  }

  public async GetListCursos(req: Request, res: Response) {

    await pool.query('SELECT * FROM Curso WHERE idEstadoCurso = 1 ', function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });

  }
  public async GetListSeccioness(req: Request, res: Response) {
    const { idCurso } = req.params;

    await pool.query('SELECT * FROM seccioncurso WHERE idCurso = ?',{idCurso}, function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });

  }





}


export const ObtCrearCurso = new CrearCursoControlador();