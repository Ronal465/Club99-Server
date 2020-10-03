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
exports.ObtMirarCursoContrller = void 0;
const database_1 = __importDefault(require("../../database"));
const JWTValidacionesControlador_1 = require("../Validaciones/JWTValidacionesControlador");
class MirarCursoContrller {
    ObtenerMisCursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            if (TokenLogin.idUsuario == undefined) {
            }
            else {
                const CrearCurso = yield database_1.default.query('SELECT * FROM Curso WHERE  idCurso in (Select idCurso FROM cursousuario where idUsuario = ?) ', [TokenLogin.idUsuario], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            res.json(err);
                        }
                        else {
                            res.json(result);
                        }
                    });
                });
            }
        });
    }
    ObtenerCursoUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            if (TokenLogin.idUsuario == undefined) {
            }
            else {
                const CrearCurso = yield database_1.default.query('SELECT * FROM Curso WHERE  idCurso in (Select idCurso FROM cursousuario where idUsuario = ? and idCurso = ?) ', [TokenLogin.idUsuario, req.body.idCurso], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            res.json(err);
                        }
                        else {
                            res.json(result);
                        }
                    });
                });
            }
        });
    }
}
exports.ObtMirarCursoContrller = new MirarCursoContrller();
