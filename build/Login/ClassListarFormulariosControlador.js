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
exports.ObtListarFormulariosControlador = void 0;
const database_1 = __importDefault(require("../database"));
class ListarFormulariosControlador {
    getListTipoGenero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoGenero', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
<<<<<<< HEAD
    ;
    getProfesion(req, res) {
=======
    GetProfesion(req, res) {
>>>>>>> ff4e1e19d778dcca837910644b9eb7b64d845946
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM Profesion', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
<<<<<<< HEAD
    getEtnia(req, res) {
=======
    GetEtnia(req, res) {
>>>>>>> ff4e1e19d778dcca837910644b9eb7b64d845946
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM ClasificacionEtnica', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
<<<<<<< HEAD
    getTipoIdentificacion(req, res) {
=======
    GetTipoIdentificacion(req, res) {
>>>>>>> ff4e1e19d778dcca837910644b9eb7b64d845946
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoIdentificacion', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
<<<<<<< HEAD
    getEstadoValidacion(req, res) {
=======
    GetEstadoValidacion(req, res) {
>>>>>>> ff4e1e19d778dcca837910644b9eb7b64d845946
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM EstadoValidacion', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
<<<<<<< HEAD
    getTipoUsuario(req, res) {
=======
    GetTipoUsuario(req, res) {
>>>>>>> ff4e1e19d778dcca837910644b9eb7b64d845946
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoUsuario', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
<<<<<<< HEAD
    getTipoSeguridadSocial(req, res) {
=======
    GetTipoSeguridadSocial(req, res) {
>>>>>>> ff4e1e19d778dcca837910644b9eb7b64d845946
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoSeguridadSocial', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
<<<<<<< HEAD
    getExclusividad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT exclusividad.FkTipoExclusividad, exclusividad.fechainicio, exclusividad.fechafinal, tipoexclusividad.Nombre FROM exclusividad,tipoexclusividad WHERE idExclusividad = ${req.params.idExclusividad}`, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM pais', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getDepartamento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT FechaInicio, FROM Exclusividad WHERE idExclusividad = ${req.params.idExclusividad}`, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getCiudad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT FechaInicio, FROM Exclusividad WHERE idExclusividad = ${req.params.idExclusividad}`, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getFuncionTipoUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query(`SELECT FechaInicio, FROM Exclusividad WHERE idExclusividad = ${req.params.idExclusividad}`, function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
=======
>>>>>>> ff4e1e19d778dcca837910644b9eb7b64d845946
}
exports.ObtListarFormulariosControlador = new ListarFormulariosControlador();
