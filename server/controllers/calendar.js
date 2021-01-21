import asyncHandler from '../middleware/asyncHandler.js';
import Calendar from '../models/Calendar.js';

// @desc  Create calendar event
// @route POST /api/v1/calendar/create
// @access Private (teacher / admin only)
export const createCalendarEvent = asyncHandler(async (req, res, next) => {
  // add teacher to req.body
  req.body.teacherId = req.user.id;

  const calendarEvent = await Calendar.create(req.body);
  res.status(201).json({
    success: true,
    data: calendarEvent,
  });
});

// @desc Get all calendar events by teacherId
// @route GET /api/v1/calendar/events/:teacherId
// @access Private
export const getAllCalendarEvents = asyncHandler(async (req, res, next) => {
  const events = await Calendar.find({ teacherId: req.params.teacherId });
  res.status(200).json({
    success: true,
    data: events,
  });
});

// @desc  update a transaction
// @route PUT /api/v1/calendar/events/event/:id
// @access Private
export const updateEventTime = asyncHandler(async (req, res, next) => {
  console.log(req.params.id);
  let calendarEvent = await Calendar.findById(req.params.id);

  if (!calendarEvent) {
    return next(new ErrorResponse(`Event not found`, 404));
  }

  // Make sure teacher is the creator of event
  if (calendarEvent.teacherId.toString() !== req.user.id) {
    return next(new ErrorResponse(`Not authorized`, 401));
  }

  calendarEvent = await Calendar.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: calendarEvent,
  });
});
