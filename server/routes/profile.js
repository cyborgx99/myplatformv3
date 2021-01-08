import express from 'express';
import {
  createProfile,
  deleteProfile,
  getMyProfile,
  updateMyProfile,
} from '../controllers/profile.js';
import { protectedRoute } from '../middleware/auth.js';

const router = express.Router();

router.get('/my', protectedRoute, getMyProfile);
router.post('/create', protectedRoute, createProfile);
router
  .route('/:id')
  .put(protectedRoute, updateMyProfile)
  .delete(protectedRoute, deleteProfile);

export default router;
