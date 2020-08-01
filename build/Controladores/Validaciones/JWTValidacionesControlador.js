"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtJWTValidacionesControlador = void 0;
const Contrasena = "Club99LoginRegister";
class JWTValidacionesControlador {
    // Numero 16
    GetCrearTokenLogin(result) {
        var jwt = require('jsonwebtoken');
        var bodyParser = require('body-parser');
        var tokenData = {
            idUsuario: result[0].idUsuario,
            Nombres: result[0].Nombres,
            Apellidos: result[0].Apellidos,
            FechaNacimiento: result[0].FechaNacimiento,
            idProfesion: result[0].idProfesion,
            idSeguridadSocial: result[0].idSeguridadSocial,
            idClasificacionEtnica: result[0].idClasificacionEtnica,
            idTipoGenero: result[0].idTipoGenero,
            idExclusividad: result[0].idExclusividad,
            idNivelAcademico: result[0].idNivelAcademico,
            idTipoUsuario: result[0].idTipoUsuario,
            idUbicacion: result[0].idUbicacion,
            idTipoPromotor: result[0].idTipoPromotor
        };
        var token = jwt.sign(tokenData, Contrasena, {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        });
        return {
            Estado: "Correcto",
            TokenLogin: token
        };
    }
}
exports.ObtJWTValidacionesControlador = new JWTValidacionesControlador();
