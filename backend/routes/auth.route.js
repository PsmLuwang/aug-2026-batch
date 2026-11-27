import express from 'express';
import { login, signup, signupVerification, getAllUsers } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/signup/verification', signupVerification)
router.post('/login', login)
router.get('/getAllUsers', getAllUsers)

export default router;