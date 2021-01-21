import mongoose from 'mongoose';

const CalendarSchema = mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    trim: true,
  },
  studentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'Student is required'],
  },
  start: {
    type: String,
  },
  end: {
    type: String,
  },
  allDay: {
    type: String,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
  // it can be array or string just as planned
  daysOfWeek: {},
});

export default mongoose.model('Calendar', CalendarSchema);
