import { Router } from 'express';
import { Authsc } from '../../Controladores/Login/AuthControlador';

class Auth {

    public router: Router = Router();

    constructor() {
            this.config();

    }
    config():void{
        this.router.post('/api/Login/Login', Authsc.Login);
               
    }
}

    const Authh = new Auth();
    export default Authh.router;