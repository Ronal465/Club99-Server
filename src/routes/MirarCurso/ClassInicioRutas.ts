import { Router } from 'express';

import { ObtMirarCursoContrller } from "../../Controladores/MirarCurso/MirarCursoController";



class ListasFormulariosRutas {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                //Ruta Para Obtener una lista de todos los generos registrados
               this.router.post('/api/MisCuros/List/Cursos', ObtMirarCursoContrller.ObtenerMisCursos);
               this.router.post('/api/MisCuros/Get/Curso', ObtMirarCursoContrller.ObtenerCursoUsuario);

               
        }
}


const ObtListasFormulariosRutas = new ListasFormulariosRutas();

export default ObtListasFormulariosRutas.router;