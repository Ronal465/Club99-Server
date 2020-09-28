import { Router } from 'express';
import { Registro } from '../../Controladores/Login/RegistrarControlador';

class Registrar {

    public router: Router = Router();

    constructor() {
        this.config();

    }
    config(): void {
        this.router.post('/api/Login/Registrar', Registro.RegistrarUsuarioToken);
        this.router.post('/api/Validar/CrearUsuario/', Registro.RegistrarUsuario);
        this.router.post('/api/Recuperar/Contrasena/Token/', Registro.RecupearContraseñaToken);
        this.router.post('/api/Recuperar/Contrasena/Cambiar/', Registro.RecupearContraseña);
        this.router.post('/api/Crear/Profesor/', Registro.PostCrearProfesor);
        this.router.post('/api/Crear/Experiencia/', Registro.PostExperienciaProfesor);

        this.router.post('/api/Cambiar/Contrasena/', Registro.PostActualizarUsuarioContrasena);
        
        this.router.post('/api/Actualizar/Usuario/', Registro.PostActualizarUsuario); 
        this.router.post('/api/Actualizar/Usuario/SeguridadSocial/', Registro.PostActualizarUsuarioSeguridadSocial);
        this.router.post('/api/Actualizar/Usuario/Exclusividad/', Registro.PostActualizarUsuarioExclusividad);
        this.router.post('/api/Actualizar/Usuario/Ubicacion/', Registro.PostActualizarUsuarioUbicacion);


    }
}

const Regis = new Registrar();
export default Regis.router;