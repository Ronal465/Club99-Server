import { Router } from 'express';
import { Authsc } from '../../Controladores/Login/AuthControlador';


class Auth {

    public router: Router = Router();

    constructor() {
            this.config();

    }
    config():void{

    }
}

    const Authh = new Auth();

    export default Authh.router;