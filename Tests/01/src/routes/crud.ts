import { Router } from 'express';
import CityController from '@controllers/CityController';

const router = Router();

router.get('/', CityController.index);

router.get('/cep', CityController.getData);

router.post('/create', CityController.create);

router.get('/add', CityController.add);

export default router;
