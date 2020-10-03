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
               this.router.post('/api/VerCurso/Get/Profesor', ObtMirarCursoContrller.ObtenerProfesorCurso);
               this.router.post('/api/VerCurso/Get/Preguntas', ObtMirarCursoContrller.PbtenerPreguntasCurso);
               this.router.post('/api/VerCurso/Crear/Preguntas', ObtMirarCursoContrller.CrearPreguntaCurso);
               this.router.post('/api/MisCuros/Get/InfoCurso', ObtMirarCursoContrller.ObtenerInfoCursoUsuario);
               this.router.post('/api/InfoCurso/Validar/Curso', ObtMirarCursoContrller.ValidarCursoAsignado);
               this.router.post('/api/Agregar/Curso/Favoritos', ObtMirarCursoContrller.AgregarCursoFavoritos);
               this.router.post('/api/Quitar/Curso/Favoritos', ObtMirarCursoContrller.QuitarCursoFavoritos);
               this.router.post('/api/Get/Preguntas/Favoritos', ObtMirarCursoContrller.GetPreguntasProfesor);
               this.router.post('/api/Update/Preguntas/Favoritos', ObtMirarCursoContrller.ResponderPreguntasProfesor);
               
               
          
        }
}


const ObtListasFormulariosRutas = new ListasFormulariosRutas();

export default ObtListasFormulariosRutas.router;