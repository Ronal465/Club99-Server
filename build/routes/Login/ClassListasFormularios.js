"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClassListarFormulariosControlador_1 = require("../../Login/ClassListarFormulariosControlador");
class ListasFormularios {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        //Ruta Para Obtener una lista de todos los generos registrados
        this.router.get('/api/list/TipoGenero', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListTipoGenero);
        this.router.get('/api/list/Profesion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetProfesion);
        this.router.get('/api/list/ClasificacionEtnica', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetEtnia);
        this.router.get('/api/list/TipoIdentificacion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetTipoIdentificacion);
        this.router.get('/api/list/EstadoValidacion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetEstadoValidacion);
        this.router.get('/api/list/TipoUsuario', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetTipoUsuario);
        this.router.get('/api/list/TipoSeguridadSocial', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetTipoSeguridadSocial);
    }
}
const ObtListasFormularios = new ListasFormularios();
exports.default = ObtListasFormularios.router;
