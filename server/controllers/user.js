import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/User.js';

// @route GET /api/v1/user/students
//desc GEt all users
//@access Public
export const getAllStudents = asyncHandler(async (req, res, next) => {
  const users = await User.find({ role: 'student' });
  res.status(200).json({
    success: true,
    data: users,
  });
});
