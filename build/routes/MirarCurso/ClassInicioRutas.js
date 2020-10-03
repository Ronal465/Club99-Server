"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MirarCursoController_1 = require("../../Controladores/MirarCurso/MirarCursoController");
class ListasFormulariosRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta Para Obtener una lista de todos los generos registrados
        this.router.post('/api/MisCuros/List/Cursos', MirarCursoController_1.ObtMirarCursoContrller.ObtenerMisCursos);
        this.router.post('/api/MisCuros/Get/Curso', MirarCursoController_1.ObtMirarCursoContrller.ObtenerCursoUsuario);
    }
}
const ObtListasFormulariosRutas = new ListasFormulariosRutas();
exports.default = ObtListasFormulariosRutas.router;
