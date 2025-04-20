import { Router } from 'express';
import { register, login } from '../controllers/auth.controller';
import { validate } from '../middleware/validation';
import { registerValidation, loginValidation } from '../validations/auth.validation';

const router = Router();

// Auth routes with validation
router.post('/register', validate(registerValidation), register);
router.post('/login', validate(loginValidation), login);

export default router; 