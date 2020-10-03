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
                res.status(404).json();
            }
            else {
                const CrearCurso = yield database_1.default.query('SELECT * FROM Curso WHERE  idCurso in (Select idCurso FROM cursousuario where idUsuario = ? and idCurso = ?) ', [TokenLogin.idUsuario, req.body.idCurso], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            res.status(404).json();
                        }
                        ;
                        if (result.length > 0) {
                            return res.json(result);
                        }
                        else {
                            res.status(404).json();
                        }
                    });
                });
            }
        });
    }
    ObtenerProfesorCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var idCurso = req.body.idCurso;
            const CrearCurso = yield database_1.default.query('SELECT * FROM ProfesorCurso WHERE  idUsuario in (Select idProfesor FROM Curso where idCurso = ?) ', [idCurso], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        const CrearCurso = yield database_1.default.query('select Nombres,Apellidos from usuario where idUsuario = ? ', [result[0].idUsuario], function (err, result2, fields) {
                            return __awaiter(this, void 0, void 0, function* () {
                                if (err) {
                                    res.json(err);
                                }
                                else {
                                    console.log(result2);
                                    res.json({
                                        idProfesorCurso: result[0].idProfesorCurso,
                                        idUsuario: result[0].idUsuario,
                                        LinkImagenProfesor: result[0].LinkImagenProfesor,
                                        biografia: result[0].biografia,
                                        Nombres: result2[0].Nombres,
                                        Apellidos: result2[0].Apellidos
                                    });
                                }
                            });
                        });
                    }
                });
            });
        });
    }
    PbtenerPreguntasCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var idSeccionCurso = req.body.idSeccionCurso;
            const CrearCurso = yield database_1.default.query('SELECT * FROM PreguntasSeccion WHERE idSeccionCurso = ? ', [idSeccionCurso], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.json(err);
                    }
                    res.json(result);
                });
            });
        });
    }
    CrearPreguntaCurso(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            if (TokenLogin.idUsuario == undefined) {
            }
            else {
                var Pregunta = {
                    idPreguntasSeccion: null,
                    Pregunta: req.body.Pregunta,
                    Respuesta: "",
                    idSeccionCurso: req.body.idSeccionCurso,
                    idUsuario: TokenLogin.idUsuario
                };
                console.log(Pregunta);
                const CrearPregunta = yield database_1.default.query('insert into PreguntasSeccion set ? ', [Pregunta], function (err, result, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            res.json(err);
                        }
                        res.json({ mensaje: "Correcto" });
                    });
                });
            }
        });
    }
    ObtenerInfoCursoUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            const CrearCurso = yield database_1.default.query('SELECT * FROM Curso  where idCurso = ? ', [req.body.idCurso], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.status(404).json();
                    }
                    ;
                    if (TokenLogin.idUsuario == undefined) {
                        res.json({
                            Estado: "Fallo",
                            Curso: result[0]
                        });
                    }
                    else {
                        res.json({
                            Estado: "Correcto",
                            Curso: result[0]
                        });
                    }
                });
            });
        });
    }
    ValidarCursoAsignado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            const CrearCurso = yield database_1.default.query('SELECT * FROM cursousuario  where idUsuario = ? and idCurso = ? ', [TokenLogin.idUsuario, req.body.idCurso], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.status(404).json();
                    }
                    ;
                    if (result.length > 0) {
                        return res.json({ Estado: "Asignado" });
                    }
                    else {
                        return res.json({ Estado: "Fallo" });
                    }
                });
            });
        });
    }
    AgregarCursoFavoritos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            const CrearCurso = yield database_1.default.query('insert into cursousuario  set ? ', [{
                    idCursoUsuario: null,
                    idUsuario: TokenLogin.idUsuario,
                    idCurso: req.body.idCurso
                }], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.status(404).json();
                    }
                    ;
                    res.json({ Estado: "Correcto" });
                });
            });
        });
    }
    QuitarCursoFavoritos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            const CrearCurso = yield database_1.default.query('delete from cursousuario  where  idUsuario = ? and idCurso = ? ', [
                TokenLogin.idUsuario,
                req.body.idCurso
            ], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.status(404).json();
                    }
                    ;
                    res.json({ Estado: "Correcto" });
                });
            });
        });
    }
    GetPreguntasProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
            const CrearCurso = yield database_1.default.query('select * from preguntasseccion  where Respuesta = ""  and idSeccionCurso in (select idSeccionCurso from seccioncurso where  idCurso in (select idCurso from curso where idProfesor = ? )) ', [
                TokenLogin.idUsuario,
            ], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.status(404).json();
                    }
                    ;
                    res.json(result);
                });
            });
        });
    }
    ResponderPreguntasProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const CrearCurso = yield database_1.default.query('Update from preguntasseccion set ?   where idPreguntasSeccion = ? ', [
                req.body,
                req.body.idPreguntasSeccion
            ], function (err, result, fields) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.status(404).json();
                    }
                    ;
                    res.json(result);
                });
            });
        });
    }
}
exports.ObtMirarCursoContrller = new MirarCursoContrller();
