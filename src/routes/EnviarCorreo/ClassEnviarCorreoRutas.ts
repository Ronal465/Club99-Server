import { Router } from 'express';

import { ObtEnviarCorreoController } from '../../Controladores/EnviarCorreo/ClassEnviarCorreoController';

class CorreoRoutes {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {
                this.router.put('/api/Validar/CorreoElectronico/:CorreoElectronico', ObtEnviarCorreoController.ValidarCorreo);

        }
}


const ObtEnviarCorreoRoutes = new CorreoRoutes();

export default ObtEnviarCorreoRoutes.router;