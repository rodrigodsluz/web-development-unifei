import { Router } from 'express';
import CrudController from '@controllers/CrudController';

const router = Router();

router.get('/', CrudController.index);

router.post('/', CrudController.create);

router.get('/list', CrudController.read);

router.get('/update/:id', CrudController.modify);

router.post('/update/:id', CrudController.update);

router.get('/delete/:id', CrudController.delete);

export default router;
