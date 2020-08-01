"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegistrarControlador_1 = require("../../Controladores/Login/RegistrarControlador");
class Registrar {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/api/Login/Registrar', RegistrarControlador_1.Registro.RegistrarUsuario);
    }
}
const Regis = new Registrar();
exports.default = Regis.router;
