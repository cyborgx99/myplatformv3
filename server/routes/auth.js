import express from 'express';
import { activateRegisteredUser, registerUser } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/activation', activateRegisteredUser);

export default router;
