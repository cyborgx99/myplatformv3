import mongoose from 'mongoose';

const ExpenseTrackerSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    trim: true,
    required: true,
  },
  transaction: {
    type: String,
    trim: true,
    enum: ['Conducted', 'Missed', 'Payment'],
    required: [true, 'Please add a transaction name'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
  },
  positive: {
    type: Boolean,
    required: [true],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('ExpenseTracker', ExpenseTrackerSchema);
