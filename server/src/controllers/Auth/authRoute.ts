import express from 'express';
import AuthController from './authController';

const router = express.Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

export default router;