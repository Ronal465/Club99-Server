import { Request, Response } from 'express';
import pool from '../../database';
import { ObtJWTValidacionesControlador } from "../Validaciones/JWTValidacionesControlador";
import { encriptacion } from "../../Incriptacion/Bcrypts";

class InicioControlador {

    public async ListCursos(req: Request, res: Response) {

     if(req.body.Estado == "NoLogueado"){

        res.json({"Mensaje": "Hola"});

     }else if(req.body.idUsuario){ 
        

       var TokenLogin = req.body;
       var ListaCursos = [];


       const ListaGratis = await pool.query('Select * from Curso where idCurso = '+
       '(Select idCurso from FiltroCurso where idFiltro = ? and idTipoFiltro = 1' , [req.body.idClasificacionEtnica], function (err, result, fields) {

        ListaCursos.push(res);


       });

        const ListaExclusivos = await pool.query('Select * from Curso where idCurso = '+
        '(Select idCurso from FiltroCurso where idFiltro = ? and idTipoFiltro = 2' , [req.body.idExclusividad], function (err, result, fields) {
        
        ListaCursos.push(res);

        });

        const ListaEtnias = await pool.query('Select * from Curso where idCurso = '+
        '(Select idCurso from FiltroCurso where idFiltro = ? and idTipoFiltro = 3' , [req.body.idClasificacionEtnica], function (err, result, fields) {
        
        ListaCursos.push(res);
        
        });

 






     }else{
         res.json({"Estado": "FalloJson"});
     }
          


        // const consultUsuarioLogin = await pool.query('SELECT idUsuario,Nombres,Apellidos,FechaNacimiento,idProfesion,idSeguridadSocial' +
        //     ',idClasificacionEtnica,idTipoGenero,idExclusividad,idNivelAcademico,idTipoUsuario' +
        //     ',idUbicacion,idTipoPromotor,idEstadoValidacion,Contrasena FROM Usuario WHERE CorreoElectronico= ? ', [login.CorreoElectronico], function (err, result, fields) {


        //         if (err) { throw err };

        //         if (result.length > 0) {

        //             if (login.Contrasena == result[0].Contrasena) {
        //                 if (result[0].idEstadoValidacion == 1) {
        //                     var data = {
        //                         headers: 'authorization',
        //                         idUsuario: result[0].idUsuario,
        //                         Nombres: result[0].Nombres,
        //                         Apellidos: result[0].Apellidos,
        //                         FechaNacimiento: result[0].FechaNacimiento,
        //                         idProfesion: result[0].idProfesion,
        //                         idSeguridadSocial: result[0].idSeguridadSocial,
        //                         idClasificacionEtnica: result[0].idClasificacionEtnica,
        //                         idTipoGenero: result[0].idTipoGenero,
        //                         idExclusividad: result[0].idExclusividad,
        //                         idNivelAcademico: result[0].idNivelAcademico,
        //                         idTipoUsuario: result[0].idTipoUsuario,
        //                         idUbicacion: result[0].idUbicacion,
        //                         idTipoPromotor: result[0].idTipoPromotor
        //                     };
        //                     return res.json(ObtJWTValidacionesControlador.GetCrearTokenLogin(data));

        //                 } else {
        //                     return res.json({ Estado: "Bloqueado" });

        //                 }



        //             } else {
        //                 return res.json({ Estado: "FalloContraseña" });


        //             }


        //         }else{
        //             return res.json({ Estado: "FalloCorreo" });
        //         }
        //     });







    }




       

 

        
       

    


}


export const ObtInicioControlador = new InicioControlador();