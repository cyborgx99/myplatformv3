import mongoose from 'mongoose';

const LessonSchema = new mongoose.Schema({
  lessonName: {
    // a1a1/lesson1/123123
    type: String,
    unique: true,
  },
  pages: [
    {
      pageQuestion: String,
      pageQuestionData: String,
    },
  ],
  privateNotes: {
    type: String,
  },
  sharedNotes: {
    type: String,
  },
});

export default mongoose.model('Lesson', LessonSchema);
