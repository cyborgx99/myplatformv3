import express from 'express';
import { getAllStudents } from '../controllers/user.js';
import { protectedRoute, authorizeOnly } from '../middleware/auth.js';

const router = express.Router();

router.get(
  '/students',
  protectedRoute,
  authorizeOnly('teacher', 'mastermind'),
  getAllStudents
);

export default router;
