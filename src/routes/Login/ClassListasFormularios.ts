import { Router } from 'express';

import { ObtListarFormulariosControlador } from '../../Login/ClassListarFormulariosControlador';

class ListasFormularios {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                //Ruta Para Obtener una lista de todos los generos registrados
                this.router.get('/api/list/TipoGenero', ObtListarFormulariosControlador.GetListTipoGenero);
                this.router.get('/api/list/Profesion',ObtListarFormulariosControlador.GetProfesion);
                this.router.get('/api/list/ClasificacionEtnica',ObtListarFormulariosControlador.GetEtnia);
                this.router.get('/api/list/TipoIdentificacion',ObtListarFormulariosControlador.GetTipoIdentificacion);
                this.router.get('/api/list/EstadoValidacion',ObtListarFormulariosControlador.GetEstadoValidacion);
                this.router.get('/api/list/TipoUsuario',ObtListarFormulariosControlador.GetTipoUsuario);
                this.router.get('/api/list/TipoSeguridadSocial',ObtListarFormulariosControlador.GetTipoSeguridadSocial);

        }
}


const ObtListasFormularios = new ListasFormularios();

export default ObtListasFormularios.router;