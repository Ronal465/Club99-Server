import { Router } from 'express';

import { ObtValidacionesControlador } from '../../Controladores/Validaciones/ValidacionesControlador';
import { ObtJWTValidacionesControlador } from "../../Controladores/Validaciones/JWTValidacionesControlador";


class ValidacionRutas {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                //Ruta Para Obtener una estado de si un correo esta  registrado
                this.router.post('/api/Validar/CorreoElectronico/', ObtValidacionesControlador.PostValidarCorreoElectronico);
                this.router.post('/api/Validar/Identificacion/', ObtValidacionesControlador.PostValidarIdentificacion);
                this.router.post('/api/Validar/Token/CambiarContrasena/',ObtJWTValidacionesControlador.VerificarRecuperarContrasena);
                this.router.post('/api/Validar/Token/Register/',ObtJWTValidacionesControlador.VerificarCrearUsuario);

                
        }
}


const ObtValidacionRutas = new ValidacionRutas();

export default ObtValidacionRutas.router;