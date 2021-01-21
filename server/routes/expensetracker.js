import express from 'express';
import {
  createTransaction,
  deleteTransaction,
  getAllTransactins,
  updateTransactionById,
} from '../controllers/expensetracker.js';
import { authorizeOnly, protectedRoute } from '../middleware/auth.js';

const router = express.Router();

router.get('/transactions', protectedRoute, getAllTransactins);
router.post(
  '/create',
  protectedRoute,
  authorizeOnly('teacher', 'mastermind'),
  createTransaction
);
router
  .route('/:id')
  .put(
    protectedRoute,
    authorizeOnly('teacher', 'mastermind'),
    updateTransactionById
  )
  .delete(
    protectedRoute,
    authorizeOnly('teacher', 'mastermind'),
    deleteTransaction
  );

export default router;
