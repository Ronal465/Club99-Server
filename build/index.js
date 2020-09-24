"use strict";
// imports nescesarios para montar el servidor
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const ClassEnviarCorreoRutas_1 = __importDefault(require("./routes/EnviarCorreo/ClassEnviarCorreoRutas"));
const ClassListasFormulariosRutas_1 = __importDefault(require("./routes/Login/ClassListasFormulariosRutas"));
const ClassValidacionesRutas_1 = __importDefault(require("./routes/Validaciones/ClassValidacionesRutas"));
const auth_1 = __importDefault(require("./routes/Login/auth"));
const Registrar_1 = __importDefault(require("./routes/Login/Registrar"));
const ClassInicioRutas_1 = __importDefault(require("./routes/Inicio/ClassInicioRutas"));
const AWSRutas_1 = __importDefault(require("./routes/AWS/AWSRutas"));
const CrearCursoRutas_1 = __importDefault(require("./routes/CrearCurso/CrearCursoRutas"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev')); // sirve para que lea las peticiones
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); // sirve para que cuando angular le mande un .json lo entienda
        this.app.use(express_1.default.urlencoded({ extended: false })); // sirve para que se pueda usar en html pas peticiones
    }
    routes() {
        this.app.use(ClassEnviarCorreoRutas_1.default);
        this.app.use(ClassListasFormulariosRutas_1.default);
        this.app.use(ClassValidacionesRutas_1.default);
        this.app.use(auth_1.default);
        this.app.use(Registrar_1.default);
        this.app.use(ClassInicioRutas_1.default);
        this.app.use(AWSRutas_1.default);
        this.app.use(CrearCursoRutas_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port " + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
