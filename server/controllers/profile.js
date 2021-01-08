import Profile from '../models/Profile.js';
import asyncHandler from '../middleware/asyncHandler.js';
import jwt from 'jsonwebtoken';
import ErrorResponse from '../middleware/ErrorResponse.js';

// @desc Get Current User Profile
// @route GET /api/v1/profile/my
// @access Private

export const getMyProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findOne({
    user: req.user.id,
  }).populate('user', ['name', 'lastName']);

  if (!profile) {
    return next(new ErrorResponse(`There's no profile for this user`, 400));
  }
  res.status(200).json({
    success: true,
    data: profile,
  });
});

// @desc  Create my profile
// @route POST /api/v1/profile/create
// @access Private
export const createProfile = asyncHandler(async (req, res, next) => {
  // add user to req.body
  req.body.user = req.user.id;

  // check if profile exists
  const findProfile = await Profile.findOne({ user: req.user.id });

  if (findProfile) {
    return next(new ErrorResponse(`Profile has already been created`), 400);
  }

  const profile = await Profile.create(req.body);
  res.status(201).json({
    success: true,
    data: profile,
  });
});

// @desc  update my profile
// @route PUT /api/v1/profile/:id
// @access Private
export const updateMyProfile = asyncHandler(async (req, res, next) => {
  let profile = await Profile.findById(req.params.id);

  if (!profile) {
    return next(new ErrorResponse(`Profile not found`, 404));
  }

  // Make sure user is the creator / owner
  if (profile.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`Not authorized`, 401));
  }

  profile = await Profile.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: profile,
  });
});

// @desc  Delete  my profile
// @route DELETE /api/v1/profile/:id
// @access Private
export const deleteProfile = asyncHandler(async (req, res, next) => {
  const profile = await Profile.findById(req.params.id);

  if (!profile) {
    return next(new ErrorResponse(`Profile Not Found`, 404));
  }

  // Make sure user is the creator / owner
  if (profile.user.toString() !== req.user.id) {
    return next(new ErrorResponse(`Not authorized`, 401));
  }

  await profile.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
