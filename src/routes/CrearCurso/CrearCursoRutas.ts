import { Router } from 'express';

import { ObtCrearCurso } from "../../Controladores/CrearCurso/CrearCursoControlador";

class CrearCursoRutas {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                //Ruta Para Obtener una lista de todos los generos registrados
                this.router.post('/api/Crear/Curso', ObtCrearCurso.PostCrearCurso);
                this.router.post('/api/Crear/Seccion', ObtCrearCurso.PostCrearSeccion);
                this.router.put('/api/Editar/Seccion', ObtCrearCurso.PutEditarSeccion);
                this.router.put('/api/Editar/Curso', ObtCrearCurso.PutEditarCurso);
                this.router.post('/api/List/Cursos', ObtCrearCurso.GetListCursos);
                this.router.get('/api/List/Secciones/:idCurso', ObtCrearCurso.GetListSeccioness);
                this.router.post('/api/Eliminar/Filtos', ObtCrearCurso.EliminarFiltrosCurso);
                this.router.post('/api/Create/Filtos', ObtCrearCurso.CreateFiltrosCursoEtnicos);
                this.router.post('/api/CambiarEstado/Curso', ObtCrearCurso.PostCrearCursoCompleto);

               
                
        }
}


const ObtCrearCursoRutas = new CrearCursoRutas();

export default ObtCrearCursoRutas.router;