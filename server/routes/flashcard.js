import express from 'express';
import {
  createFlashcard,
  deleteFlashcard,
  getAllFlashcards,
  updateFlashcardById,
} from '../controllers/flashcard.js';
import { protectedRoute } from '../middleware/auth.js';

const router = express.Router();

router.post('/create', protectedRoute, createFlashcard);
router.get('/flashcards', protectedRoute, getAllFlashcards);
router.delete('/:id', protectedRoute, deleteFlashcard);
router.put('/:id', protectedRoute, updateFlashcardById);

export default router;
