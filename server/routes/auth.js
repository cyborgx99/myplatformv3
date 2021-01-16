import express from 'express';
import {
  validateNewPassword,
  validateResetPassword,
  validateLogin,
} from '../middleware/validators.js';
import {
  activateRegisteredUser,
  contactUs,
  getMe,
  login,
  logout,
  registerUser,
  resetPasswordRequest,
  setNewPassword,
} from '../controllers/auth.js';
import { protectedRoute } from '../middleware/auth.js';

const router = express.Router();

router.post('/contact-us', contactUs);
router.get('/getme', protectedRoute, getMe);
router.get('/logout', logout);
router.post('/register', registerUser);
router.post('/activation', activateRegisteredUser);
router.post('/login', validateLogin, login);
router.put('/reset-request', validateResetPassword, resetPasswordRequest);
router.put('/reset-password', validateNewPassword, setNewPassword);

export default router;
