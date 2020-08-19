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
exports.ObtValidacionesControlador = void 0;
const database_1 = __importDefault(require("../../database"));
class ValidacionesControlador {
    // Numero 16
    GetValidarCorreoElectronico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CorreoElectronico } = req.params;
            const consultaempleado = yield database_1.default.query('SELECT CorreoElectronico FROM Usuario WHERE CorreoElectronico= ?', [CorreoElectronico], function (err, result, fields) {
                if (err) {
                    throw err;
                }
                ;
                if (result.length > 0) {
                    res.json({ Estado: "Correcto" });
                }
                else {
                    res.status(404).json({ Estado: "Fallo" });
                }
            });
        });
    }
}
exports.ObtValidacionesControlador = new ValidacionesControlador();
