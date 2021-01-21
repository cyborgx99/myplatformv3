import express from 'express';
import {
  createCalendarEvent,
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

router.put(
  '/events/event/:id',
  protectedRoute,
  authorizeOnly('teacher', 'mastermind'),
  updateEventTime
);

router.get('/events/:teacherId', protectedRoute, getAllCalendarEvents);

export default router;
