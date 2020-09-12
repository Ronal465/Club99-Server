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
exports.ObtInicioControlador = void 0;
const database_1 = __importDefault(require("../../database"));
const JWTValidacionesControlador_1 = require("../Validaciones/JWTValidacionesControlador");
class InicioControlador {
    ListCursos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var ListaCursos = [];
            if (req.body.TokenLogin == undefined) {
                res.json({ "Mensaje": "Hola" });
            }
            else if (req.body.TokenLogin = !undefined) {
                var TokenLogin = JWTValidacionesControlador_1.ObtJWTValidacionesControlador.VerificarLoginToken(req.body.TokenLogin);
                const ListaGratis = yield database_1.default.query('Select * from Curso where idCurso in' +
                    '(Select idCurso from FiltroCurso where idFiltro = 0 and idTipoFiltro = 1)', function (err, resultGratis, fields) {
                    return __awaiter(this, void 0, void 0, function* () {
                        yield resultGratis.forEach((Curso) => __awaiter(this, void 0, void 0, function* () {
                            const consultProfesor = yield database_1.default.query('SELECT idUsuario,Nombres,Apellidos FROM Usuario WHERE idUsuario = ?', [Curso.idProfesor], function (err, Profesor, fields) {
                                return __awaiter(this, void 0, void 0, function* () {
                                    const consultProfesor = yield database_1.default.query('SELECT idFiltroCurso,idTipoFiltro,idFiltro FROM filtrocurso WHERE idCurso = ?', [Curso.idCurso], function (err, Filtros, fields) {
                                        return __awaiter(this, void 0, void 0, function* () {
                                            ListaCursos.push({
                                                Curso,
                                                Profesor,
                                                Filtros
                                            });
                                            ListaCursos.push({
                                                Curso,
                                                Profesor,
                                                Filtros
                                            });
                                            res.json(ListaCursos);
                                        });
                                    });
                                });
                            });
                        }));
                    });
                });
                // const ListaExclusivos = await pool.query('Select * from Curso where idCurso = '+
                // '(Select idCurso from FiltroCurso where idFiltro = ? and idTipoFiltro = 2' , [req.body.idExclusividad], function (err, result, fields) {
                // ListaCursos.push(res);
                // });
                // const ListaEtnias = await pool.query('Select * from Curso where idCurso = '+
                // '(Select idCurso from FiltroCurso where idFiltro = ? and idTipoFiltro = 3' , [req.body.idClasificacionEtnica], function (err, result, fields) {
                // ListaCursos.push(res);
                // });
            }
            else {
                res.json({ "Estado": "FalloJson" });
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
        });
    }
}
exports.ObtInicioControlador = new InicioControlador();
