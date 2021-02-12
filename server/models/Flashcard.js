import mongoose from 'mongoose';

const FlashcardSchema = mongoose.Schema(
  {
    userId: {
      required: true,
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    deckName: {
      required: true,
      type: String,
      trim: true,
    },
    frontSide: {
      required: true,
      trim: true,
      type: String,
    },
    backSide: {
      required: true,
      trim: true,
      type: String,
    },
    dateToShowCard: {
      type: Date,
      default: new Date(),
    },
    showCardInDays: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Flashcard', FlashcardSchema);
