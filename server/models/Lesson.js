import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  lesson: {
    type: String,
    required: true,
  },
  page: {
    number: {
      type: String,
    },
    data: {
      type: String,
    },
  },
  privateNotes: {
    type: String,
  },
  sharedNotes: {
    type: String,
  },
});

export default mongoose.model('Lesson', LessonSchema);
