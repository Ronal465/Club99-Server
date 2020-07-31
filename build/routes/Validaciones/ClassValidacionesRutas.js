"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ValidacionesControlador_1 = require("../../Controladores/Validaciones/ValidacionesControlador");
const JWTValidacionesControlador_1 = require("../../Controladores/Validaciones/JWTValidacionesControlador");
class ValidacionRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta Para Obtener una lista de todos los generos registrados
        this.router.get('/api/Validar/CorreoElectronico/:CorreoElectronico', ValidacionesControlador_1.ObtValidacionesControlador.GetValidarCorreoElectronico);
        this.router.get('/api/Validar/:idUsuario/', JWTValidacionesControlador_1.ObtJWTValidacionesControlador.GetCrearTokenLogin);
    }
}
const ObtValidacionRutas = new ValidacionRutas();
exports.default = ObtValidacionRutas.router;
