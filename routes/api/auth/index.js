import { Router } from 'express';
import {
  validateCreate,
  validateCredentials,
  validateUpdateSubscription,
  validateToken,
} from './validation';
import { registration, login, logout } from '../../../controllers/auth';
import guard from '../../../middlewares/guard';

const router = new Router();

router.patch('/', validateUpdateSubscription);
router.post('/signin', validateCreate, registration);
router.post('/login', validateCredentials, login);
router.get('/logout', guard, logout);
router.get('/current', validateToken);

export default router;
