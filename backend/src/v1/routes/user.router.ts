import { Router } from 'express';
import * as userController from '../../controller/user.controller';
import controllerTryCatch from '../../middleware/error/controllerTryCatch';

const router = Router();

// cada ruta debe ser envuelta en el middleware try catch de controllers
router  .get('/', controllerTryCatch(userController.getAllUsers))
        .get('/:idUser', controllerTryCatch(userController.getUserById))
        .post('/', controllerTryCatch(userController.createUser))
        .put('/:idUser', controllerTryCatch(userController.updateUser))
        .delete('/:idUser', controllerTryCatch(userController.deleteUser));

export default router;