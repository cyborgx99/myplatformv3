import { check, validationResult } from 'express-validator';
import ErrorResponse from './ErrorResponse.js';

const result = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => error.msg);
    return next(new ErrorResponse(errorMessages.join(), 400));
  }
  next();
};

export const validateResetPassword = [
  check('email', 'Please Include a Valid Email').isEmail(),
  result,
];

export const validateLogin = [
  check('email', 'Please Include a Valid Email').isEmail(),
  check('password', 'Password cannot be empty').not().isEmpty(),
  result,
];

export const validateNewPassword = [
  check('newPassword', 'Password should be at least 6 characters').isLength({
    min: 6,
  }),
  check('resetPasswordLink', 'Invalid or Expired Link').not().isEmpty(),
  result,
];
