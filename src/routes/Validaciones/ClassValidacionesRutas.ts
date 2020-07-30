import { Router } from 'express';

import { ObtValidacionesControlador } from '../../Controladores/Validaciones/ValidacionesControlador';

class ValidacionRutas {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {

                //Ruta Para Obtener una lista de todos los generos registrados
                this.router.get('/api/Validar/CorreoElectronico/:CorreoElectronico', ObtValidacionesControlador.GetValidarCorreoElectronico);
    
        }
}


const ObtValidacionRutas = new ValidacionRutas();

export default ObtValidacionRutas.router;