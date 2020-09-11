import { Router } from 'express';
import { Authsc } from '../../Controladores/Login/AuthControlador';
import { ObtJWTValidacionesControlador } from "../../Controladores/Validaciones/JWTValidacionesControlador";

class Auth {

    public router: Router = Router();

    constructor() {
            this.config();

    }
    config():void{
        this.router.post('/api/Login/Login', Authsc.Login);
        this.router.post('/api/Validar/TokenLogin/',ObtJWTValidacionesControlador.VerificarLogin );  
    }
}

    const Authh = new Auth();
    export default Authh.router;
