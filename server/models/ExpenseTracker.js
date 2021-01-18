import mongoose from 'mongoose';

const ExpenseTrackerSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    trim: true,
    required: true,
    unique: true,
  },
  transaction: {
    type: String,
    trim: true,
    required: [true, 'Please add a transaction name'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add an amount'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('ExpenseTracker', ExpenseTrackerSchema);
