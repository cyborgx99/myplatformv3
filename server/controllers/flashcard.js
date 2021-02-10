import asyncHandler from '../middleware/asyncHandler.js';
import Flashcard from '../models/Flashcard.js';

// @desc  Create a flashcard
// @route POST /api/v1/flashcard/create
// @access Private
export const createFlashcard = asyncHandler(async (req, res, next) => {
  // add user to req.body
  req.body.userId = req.user.id;
  const flashcard = await Flashcard.create(req.body);
  res.status(201).json({
    success: true,
    data: flashcard,
  });
});

// @desc Get all flashcards
// @route GET /api/v1/flashcard/flashcards
// @access Private
export const getAllFlashcards = asyncHandler(async (req, res, next) => {
  const flashcards = await Flashcard.find({ userId: req.user.id });
  res.status(200).json({
    success: true,
    data: flashcards,
  });
});

// @desc  Delete a flashcard by id
// @route DELETE /api/v1/flashcard/:id
// @access Private
export const deleteFlashcard = asyncHandler(async (req, res, next) => {
  const flashcard = await Flashcard.findById(req.params.id);

  if (!flashcard) {
    return next(new ErrorResponse(`Flashcard Not Found`, 404));
  }

  // Make sure user is the creator / owner
  if (flashcard.userId.toString() !== req.user.id) {
    return next(new ErrorResponse(`Not authorized`, 401));
  }

  await flashcard.remove();

  res.status(200).json({
    success: true,
    data: flashcard._id,
  });
});

// @desc  update a flashcard
// @route PUT /api/v1/flashcard/:id
// @access Private
export const updateFlashcardById = asyncHandler(async (req, res, next) => {
  let flashcard = await Flashcard.findById(req.params.id);

  if (!flashcard) {
    return next(new ErrorResponse(`Flashcard not found`, 404));
  }

  // Make sure user is the creator / owner
  if (flashcard.userId.toString() !== req.user.id) {
    return next(new ErrorResponse(`Not authorized`, 401));
  }

  flashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: flashcard,
  });
});
