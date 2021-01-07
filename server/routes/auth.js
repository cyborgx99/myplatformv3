import express from 'express';
import {
  validateNewPassword,
  validateResetPassword,
  validateLogin,
} from '../middleware/validators.js';
import {
  activateRegisteredUser,
  login,
  registerUser,
  resetPasswordRequest,
  setNewPassword,
} from '../controllers/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/activation', activateRegisteredUser);
router.post('/login', validateLogin, login);
router.put('/reset-request', validateResetPassword, resetPasswordRequest);
router.put('/reset-password', validateNewPassword, setNewPassword);

export default router;
