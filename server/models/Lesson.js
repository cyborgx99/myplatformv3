import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
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
    type: String,
  },
  pageData: {
    type: String,
  },
  privateNotes: {
    type: String,
  },
  sharedNotes: {
    type: String,
  },
});

export default mongoose.model('Lesson', LessonSchema);
