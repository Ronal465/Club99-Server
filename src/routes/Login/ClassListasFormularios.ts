import { Router } from 'express';

import { ObtListarFormulariosControlador } from '../../Login/ClassListarFormulariosControlador';

class ListasFormularios {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                //Ruta Para Obtener una lista de todos los generos registrados
                this.router.get('/api/list/TipoGenero', ObtListarFormulariosControlador.getListTipoGenero);
                this.router.get('/api/list/Profesion',ObtListarFormulariosControlador.getProfesion);
                this.router.get('/api/list/ClasificacionEtnica',ObtListarFormulariosControlador.getEtnia);
                this.router.get('/api/list/TipoIdentificacion',ObtListarFormulariosControlador.getTipoIdentificacion);
                this.router.get('/api/list/EstadoValidacion',ObtListarFormulariosControlador.getEstadoValidacion);
                this.router.get('/api/list/TipoUsuario',ObtListarFormulariosControlador.getTipoUsuario);
                this.router.get('/api/list/TipoSeguridadSocial',ObtListarFormulariosControlador.getTipoSeguridadSocial);
                this.router.get('/api/get/Exclusividad/:idExclusividad',ObtListarFormulariosControlador.getExclusividad);
                this.router.get('/api/list/Pais',ObtListarFormulariosControlador.getPais);
                this.router.get('/api/list/Departamento/:idPais',ObtListarFormulariosControlador.getDepartamento);
                this.router.get('/api/list/Ciudad/:idDepartamento',ObtListarFormulariosControlador.getCiudad);
                this.router.get('/api/list/FuncionTipoUsuario/:idTipoUsuario',ObtListarFormulariosControlador.getTipoUsuario);
                  

                
        }
}


const ObtListasFormularios = new ListasFormularios();

export default ObtListasFormularios.router;