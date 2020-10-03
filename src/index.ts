// imports nescesarios para montar el servidor

import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';


import ObtEnviarCorreoRutas from './routes/EnviarCorreo/ClassEnviarCorreoRutas';
import ObtListasFormulariosRutas from "./routes/Login/ClassListasFormulariosRutas";
import ObtValidacionesRutas from "./routes/Validaciones/ClassValidacionesRutas";
import Authh from "./routes/Login/auth";
import Regis from "./routes/Login/Registrar";
import ObtInicioRuta from "./routes/Inicio/ClassInicioRutas";
import ObtAWS from "./routes/AWS/AWSRutas";
import ObtCrearCursoRutas from "./routes/CrearCurso/CrearCursoRutas";
import ObtMirarCUrso from "./routes/MirarCurso/ClassInicioRutas";


class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));    // sirve para que lea las peticiones
        this.app.use(cors());
        this.app.use(express.json()); // sirve para que cuando angular le mande un .json lo entienda
        this.app.use(express.urlencoded({ extended: false })); // sirve para que se pueda usar en html pas peticiones

    }

    routes(): void {

        this.app.use(ObtEnviarCorreoRutas);
        this.app.use(ObtListasFormulariosRutas);
        this.app.use(ObtValidacionesRutas);
        this.app.use(Authh);
        this.app.use(Regis);
        this.app.use(ObtInicioRuta);
        this.app.use(ObtAWS);
        this.app.use(ObtCrearCursoRutas);
        this.app.use(ObtMirarCUrso);

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port " + this.app.get('port'));
        });
    }

}


const server = new Server();
server.start();