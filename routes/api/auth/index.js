import { Router } from 'express';
import {
  validateCreate,
  validateCredentials,
  validateUpdateSubscription,
  validateToken,
} from './validation';

const router = new Router();

router.patch('/', validateUpdateSubscription);
router.post('/signin', validateCreate);
router.post('/login', validateCredentials);
router.get('/logout');
router.get('/current', validateToken);

export default router;
