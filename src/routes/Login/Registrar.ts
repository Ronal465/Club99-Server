import { Router } from 'express';
import { Registro } from '../../Controladores/Login/RegistrarControlador';

class Registrar {

    public router: Router = Router();

    constructor() {
            this.config();

    }
    config():void{
        this.router.post('/api/Login/Registrar',Registro.RegistrarUsuario);
        
    }
}

    const Regis = new Registrar();
    export default Regis.router;