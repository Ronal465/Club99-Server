"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../database"));
const Contrasena = "Club99LoginRegister";
class JWTValidacionesControlador {
    // Numero 16
    GetCrearTokenLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var jwt = require('jsonwebtoken');
            var bodyParser = require('body-parser');
            const { idUsuario } = req.params;
            const consultaempleado = yield database_1.default.query('SELECT idUsuario,Nombres,Apellidos,FechaNacimiento,idProfesion,idSeguridadSocial' +
                ',idClasificacionEtnica,idTipoGenero,idExclusividad,idNivelAcademico,idTipoUsuario' +
                ',idUbicacion,idTipoPromotor FROM Usuario WHERE idUsuario= ?', [idUsuario], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
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
                    return res.json({ Estado: "Correcto",
                        TokenLogin: token });
                }
                else {
                    res.status(404).json({ Estado: "Fallo" });
                }
            });
        });
    }
}
exports.ObtJWTValidacionesControlador = new JWTValidacionesControlador();
