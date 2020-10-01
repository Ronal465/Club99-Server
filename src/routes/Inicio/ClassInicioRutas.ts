import { Router } from 'express';

import {ObtInicioControlador} from "../../Controladores/Inicio/InicioControlador";



class ListasFormulariosRutas {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                //Ruta Para Obtener una lista de todos los generos registrados
                this.router.get('/api/Inicio/List/Cursos', ObtInicioControlador.ListCursosGratis);
                this.router.post('/api/Inicio/List/Cursos/Etnicos', ObtInicioControlador.ListCursosEtnicos);
                this.router.post('/api/Inicio/List/Cursos/Exclusivo', ObtInicioControlador.ListCursosExclusivos);
               
                this.router.post('/api/Inicio/Get/Profesor', ObtInicioControlador.ConsultProfesor);
                this.router.post('/api/Inicio/Get/Filtros', ObtInicioControlador.ConsultFiltros);
                this.router.post('/api/Inicio/Get/Nombre/Filtro', ObtInicioControlador.ConsultFiltroNombre);
 

 
        }
}


const ObtListasFormulariosRutas = new ListasFormulariosRutas();

export default ObtListasFormulariosRutas.router;