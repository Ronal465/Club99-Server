import { Router } from 'express';

import { ObtEnviarCorreoController } from '../Login/ClassEnviarCorreoController';

class CorreoRoutes {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {
                this.router.put('/api/EnviarCorreo/:Correo', ObtEnviarCorreoController.EnviarCorreo);

        }
}


const ObtEnviarCorreoRoutes = new CorreoRoutes();

export default ObtEnviarCorreoRoutes.router;