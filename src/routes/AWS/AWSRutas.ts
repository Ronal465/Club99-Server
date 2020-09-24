import { Router } from 'express';

import { ObtAWSControlador} from "../../Controladores/AWS/AWSControlador";
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

class CorreoRoutes {

        public router: Router = Router();

        constructor() {
                this.config();

        }

        config(): void {
                this.router.post('/api/Upload/File', upload.single('video'),ObtAWSControlador.SubirVideo);
                this.router.post('/api/Upload/img', upload.single('img'),ObtAWSControlador.SubirImg); 
                
        }
}


const ObtEnviarCorreoRoutes = new CorreoRoutes();

export default ObtEnviarCorreoRoutes.router;