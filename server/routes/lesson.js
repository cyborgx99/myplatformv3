import express from 'express';
import {
  getLessonNotes,
  lessonSaveUpdateNotes,
  lessonSaveUpdatePages,
} from '../controllers/lesson.js';
import { protectedRoute } from '../middleware/auth.js';

const router = express.Router();

router.post('/save-notes', protectedRoute, lessonSaveUpdateNotes);
router.post('/get-notes', protectedRoute, getLessonNotes);
router.post('/save-pages', protectedRoute, lessonSaveUpdatePages);

export default router;
