import { Router } from 'express';

import {ObtInicioControlador} from "../../Controladores/Inicio/InicioControlador";



class ListasFormulariosRutas {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                //Ruta Para Obtener una lista de todos los generos registrados
                this.router.post('/api/Inicio/List/Cursos', ObtInicioControlador.ListCursos);
 
        }
}


const ObtListasFormulariosRutas = new ListasFormulariosRutas();

export default ObtListasFormulariosRutas.router;