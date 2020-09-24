"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CrearCursoControlador_1 = require("../../Controladores/CrearCurso/CrearCursoControlador");
class CrearCursoRutas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta Para Obtener una lista de todos los generos registrados
        this.router.post('/api/Crear/Curso', CrearCursoControlador_1.ObtCrearCurso.PostCrearCurso);
        this.router.post('/api/Crear/Seccion', CrearCursoControlador_1.ObtCrearCurso.PostCrearSeccion);
        this.router.put('/api/Editar/Seccion', CrearCursoControlador_1.ObtCrearCurso.PutEditarSeccion);
        this.router.put('/api/Editar/Curso', CrearCursoControlador_1.ObtCrearCurso.PutEditarCurso);
        this.router.get('/api/List/Cursos', CrearCursoControlador_1.ObtCrearCurso.GetListCursos);
        this.router.get('/api/List/Secciones/:idCurso', CrearCursoControlador_1.ObtCrearCurso.GetListSeccioness);
    }
}
const ObtCrearCursoRutas = new CrearCursoRutas();
exports.default = ObtCrearCursoRutas.router;
