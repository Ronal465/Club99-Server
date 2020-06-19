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

        }
}


const ObtListasFormularios = new ListasFormularios();

export default ObtListasFormularios.router;