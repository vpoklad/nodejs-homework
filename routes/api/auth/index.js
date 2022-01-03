import { Router } from 'express';
import {
  validateCreate,
  validateCredentials,
  validateUpdateSubscription,
  validateToken,
} from './validation';
import { registration, login } from '../../../controllers/auth';

const router = new Router();

router.patch('/', validateUpdateSubscription);
router.post('/signin', validateCreate, registration);
router.post('/login', validateCredentials, login);
router.get('/logout');
router.get('/current', validateToken);

export default router;
