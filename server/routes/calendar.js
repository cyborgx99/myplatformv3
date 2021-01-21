import express from 'express';
import {
  createCalendarEvent,
  deleteCalendarEvent,
  getAllCalendarEvents,
  updateEventTime,
} from '../controllers/calendar.js';

import { authorizeOnly, protectedRoute } from '../middleware/auth.js';

const router = express.Router();

router.post(
  '/events/create',
  protectedRoute,
  authorizeOnly('teacher', 'mastermind'),
  createCalendarEvent
);

router
  .route('/events/event/:id')
  .put(protectedRoute, authorizeOnly('teacher', 'mastermind'), updateEventTime)
  .delete(
    protectedRoute,
    authorizeOnly('teacher', 'mastermind'),
    deleteCalendarEvent
  );

router.get('/events/:teacherId', protectedRoute, getAllCalendarEvents);

export default router;
