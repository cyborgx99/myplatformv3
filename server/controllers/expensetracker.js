import asyncHandler from '../middleware/asyncHandler.js';
import ExpenseTracker from '../models/ExpenseTracker.js';

// @desc  Create a transaction
// @route POST /api/v1/expense-tracker/create
// @access Private
export const createTransaction = asyncHandler(async (req, res, next) => {
  // add user to req.body
  req.body.user = req.user.id;
  const transaction = await ExpenseTracker.create(req.body);
  res.status(201).json({
    success: true,
    data: transaction,
  });
});

// @desc Get all transactions
// @route GET /api/v1/expense-tracker/transactions
// @access Private
export const getAllTransactins = asyncHandler(async (req, res, next) => {
  const transactions = await ExpenseTracker.find({ user: req.user.id });
  res.status(200).json({
    success: true,
    data: transactions,
  });
});

// @desc  update a transaction
// @route PUT /api/v1/expense-tracker/:id
// @access Private
export const updateTransactionById = asyncHandler(async (req, res, next) => {
  let transaction = await ExpenseTracker.findById(req.params.id);

  if (!transaction) {
    return next(new ErrorResponse(`Transaction not found`, 404));
  }

  // Make sure user is the creator / owner
  if (transaction.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`Not authorized`, 401));
  }

  transaction = await ExpenseTracker.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: transaction,
  });
});

// @desc  Delete a transaction by id
// @route DELETE /api/v1/expense-tracker/:id
// @access Private
export const deleteTransaction = asyncHandler(async (req, res, next) => {
  const transaction = await ExpenseTracker.findById(req.params.id);

  if (!transaction) {
    return next(new ErrorResponse(`Transaction Not Found`, 404));
  }

  // Make sure user is the creator / owner
  if (transaction.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`Not authorized`, 401));
  }

  await transaction.remove();

  res.status(200).json({
    success: true,
    data: transaction._id,
  });
});
