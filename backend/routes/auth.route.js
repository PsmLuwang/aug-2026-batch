import express from 'express';
import { login, signup, signupVerification } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup/:num', signup)
router.post('/signup/verification', signupVerification)
router.post('/login', login)

export default router;