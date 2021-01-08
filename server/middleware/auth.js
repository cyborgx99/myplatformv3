import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import asyncHandler from './asyncHandler.js';
import ErrorResponse from './ErrorResponse.js';

export const protectedRoute = asyncHandler(async (req, res, next) => {
  let token;
  if (
    //   get token from headers
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
    //   or cookie
    token = req.cookies.token;
  }

  //   Make sure token exists
  if (!token) {
    return next(new ErrorResponse('Not authorized', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorized', 401));
  }
});
