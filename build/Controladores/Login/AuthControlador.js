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
class Auths {
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var login = {
                CorreoElectronico: req.body.CorreoElectronico,
                Contrasena: req.body.Contrasena
            };
            console.log(login);
            const consultaempleado = yield database_1.default.query('SELECT idUsuario,Nombres,Apellidos,FechaNacimiento,idProfesion,idSeguridadSocial' +
                ',idClasificacionEtnica,idTipoGenero,idExclusividad,idNivelAcademico,idTipoUsuario' +
                ',idUbicacion,idTipoPromotor FROM Usuario WHERE CorreoElectronico= ? and Contrasena=?', [login.CorreoElectronico, login.Contrasena], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    return res.json(result);
                }
                else {
                    return res.json({ Estado: "fallo" });
                }
            });
        });
    }
}
exports.Authsc = new Auths();
