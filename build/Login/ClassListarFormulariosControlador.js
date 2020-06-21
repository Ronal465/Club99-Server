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
const database_1 = __importDefault(require("../database"));
class ListarFormulariosControlador {
    GetListTipoGenero(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoGenero', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetProfesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM Profesion', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetEtnia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM ClasificacionEtnica', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetTipoIdentificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoIdentificacion', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetEstadoValidacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM EstadoValidacion', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetTipoUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoUsuario', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    GetTipoSeguridadSocial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM TipoSeguridadSocial', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
}
exports.ObtListarFormulariosControlador = new ListarFormulariosControlador();
