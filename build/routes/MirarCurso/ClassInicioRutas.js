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
        this.router.post('/api/VerCurso/Get/Profesor', MirarCursoController_1.ObtMirarCursoContrller.ObtenerProfesorCurso);
        this.router.post('/api/VerCurso/Get/Preguntas', MirarCursoController_1.ObtMirarCursoContrller.PbtenerPreguntasCurso);
        this.router.post('/api/VerCurso/Crear/Preguntas', MirarCursoController_1.ObtMirarCursoContrller.CrearPreguntaCurso);
        this.router.post('/api/MisCuros/Get/InfoCurso', MirarCursoController_1.ObtMirarCursoContrller.ObtenerInfoCursoUsuario);
        this.router.post('/api/InfoCurso/Validar/Curso', MirarCursoController_1.ObtMirarCursoContrller.ValidarCursoAsignado);
        this.router.post('/api/Agregar/Curso/Favoritos', MirarCursoController_1.ObtMirarCursoContrller.AgregarCursoFavoritos);
        this.router.post('/api/Quitar/Curso/Favoritos', MirarCursoController_1.ObtMirarCursoContrller.QuitarCursoFavoritos);
        this.router.post('/api/Get/Preguntas/Favoritos', MirarCursoController_1.ObtMirarCursoContrller.GetPreguntasProfesor);
        this.router.post('/api/Update/Preguntas/Favoritos', MirarCursoController_1.ObtMirarCursoContrller.ResponderPreguntasProfesor);
    }
}
const ObtListasFormulariosRutas = new ListasFormulariosRutas();
exports.default = ObtListasFormulariosRutas.router;
