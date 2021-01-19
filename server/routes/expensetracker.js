import express from 'express';
import {
  createTransaction,
  deleteTransaction,
  getAllTransactins,
  updateTransactionById,
} from '../controllers/expensetracker.js';
import { protectedRoute } from '../middleware/auth.js';

const router = express.Router();

router.get('/transactions', protectedRoute, getAllTransactins);
router.post('/create', protectedRoute, createTransaction);
router
  .route('/:id')
  .put(protectedRoute, updateTransactionById)
  .delete(protectedRoute, deleteTransaction);

export default router;
