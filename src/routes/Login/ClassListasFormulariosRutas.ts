import { Router } from 'express';

import { ObtListarFormulariosControlador } from '../../Controladores/Login/ClassListarFormulariosControlador';

class ListasFormulariosRutas {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                //Ruta Para Obtener una lista de todos los generos registrados
                this.router.get('/api/list/TipoGenero', ObtListarFormulariosControlador.GetListTipoGenero);
                this.router.get('/api/list/Profesion',ObtListarFormulariosControlador.GetListProfesion);
                this.router.get('/api/list/NivelAcademico',ObtListarFormulariosControlador.GetListNivelAcademico);
                this.router.get('/api/list/ClasificacionEtnica',ObtListarFormulariosControlador.GetListEtnia);
                this.router.get('/api/list/TipoIdentificacion',ObtListarFormulariosControlador.GetListTipoIdentificacion);
                this.router.get('/api/list/EstadoValidacion',ObtListarFormulariosControlador.GetListEstadoValidacion);
                this.router.get('/api/list/TipoUsuario',ObtListarFormulariosControlador.GetListTipoUsuario);
                this.router.get('/api/list/TipoSeguridadSocial',ObtListarFormulariosControlador.GetListTipoSeguridadSocial);
                this.router.get('/api/list/Pais',ObtListarFormulariosControlador.GetListPaises);
                this.router.get('/api/list/Departamento/:idPais',ObtListarFormulariosControlador.GetListDepartamento);
                this.router.get('/api/list/Ciudad/:idDepartamento',ObtListarFormulariosControlador.GitListCiudad);
                this.router.get('/api/list/FuncionTipoUsuario/:idTipoUsuario',ObtListarFormulariosControlador.GetListFuncionesTipoUsuario);
                this.router.get('/api/list/TipoFuncionarioPublico', ObtListarFormulariosControlador.GetListTipoPromotor);
                this.router.get('/api/list/TipoExclusividad', ObtListarFormulariosControlador.GetListTipoExclusividad);
                
        }
}


const ObtListasFormulariosRutas = new ListasFormulariosRutas();

export default ObtListasFormulariosRutas.router;