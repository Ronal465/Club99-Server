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
<<<<<<< HEAD
        this.router.get('/api/list/TipoGenero', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getListTipoGenero);
        this.router.get('/api/list/Profesion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getProfesion);
        this.router.get('/api/list/ClasificacionEtnica', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getEtnia);
        this.router.get('/api/list/TipoIdentificacion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getTipoIdentificacion);
        this.router.get('/api/list/EstadoValidacion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getEstadoValidacion);
        this.router.get('/api/list/TipoUsuario', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getTipoUsuario);
        this.router.get('/api/list/TipoSeguridadSocial', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getTipoSeguridadSocial);
        this.router.get('/api/get/Exclusividad/:idExclusividad', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getExclusividad);
        this.router.get('/api/list/Pais', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getPais);
        this.router.get('/api/list/Departamento/:idPais', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getDepartamento);
        this.router.get('/api/list/Ciudad/:idDepartamento', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getCiudad);
        this.router.get('/api/list/FuncionTipoUsuario/:idTipoUsuario', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.getTipoUsuario);
=======
        this.router.get('/api/list/TipoGenero', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetListTipoGenero);
        this.router.get('/api/list/Profesion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetProfesion);
        this.router.get('/api/list/ClasificacionEtnica', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetEtnia);
        this.router.get('/api/list/TipoIdentificacion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetTipoIdentificacion);
        this.router.get('/api/list/EstadoValidacion', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetEstadoValidacion);
        this.router.get('/api/list/TipoUsuario', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetTipoUsuario);
        this.router.get('/api/list/TipoSeguridadSocial', ClassListarFormulariosControlador_1.ObtListarFormulariosControlador.GetTipoSeguridadSocial);
>>>>>>> ff4e1e19d778dcca837910644b9eb7b64d845946
    }
}
const ObtListasFormularios = new ListasFormularios();
exports.default = ObtListasFormularios.router;
