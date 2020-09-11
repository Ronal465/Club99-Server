import { Router } from 'express';
import { Registro } from '../../Controladores/Login/RegistrarControlador';

class Registrar {

    public router: Router = Router();

    constructor() {
            this.config();

    }
    config():void{
        this.router.post('/api/Login/Registrar',Registro.RegistrarUsuarioToken);
        this.router.post('/api/Validar/CrearUsuario/',Registro.RegistrarUsuario);
        this.router.post('/api/Recuperar/Contrasena/Token/',Registro.RecupearContraseñaToken);
        this.router.post('/api/Recuperar/Contrasena/Cambiar/',Registro.RecupearContraseña);


        
    }
}

    const Regis = new Registrar();
    export default Regis.router;