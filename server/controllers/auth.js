import User from '../models/User.js';
import sendEmail from '../utils/emailSender.js';
import asyncHandler from '../middleware/asyncHandler.js';
import jwt from 'jsonwebtoken';
import ErrorResponse from '../middleware/ErrorResponse.js';

// @desc Send Confirm Registration Link to User's Email
// @route POST /api/v1/auth/register
// @access Public

export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, lastName, email, password } = req.body;
  // Check if user registered
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorResponse('User Already Exists', 400));
  }

  const token = jwt.sign(
    { name, lastName, email, password },
    process.env.JWT_ACCOUNT_ACTIVATION,
    { expiresIn: '60m' }
  );

  const html = `<p>Click the following link to activate your account:</p>
  <a href="${req.protocol}://${req.get(
    'host'
  )}/api/v1/activation/${token}">Click Me To Activate Your Account</a>
  <hr />
    <p>Or copy paste the link into your browser:
    <p>${req.protocol}://${req.get('host')}/api/v1/auth/activation/${token}</p>
    <hr />
    <p>This email may contain sensitive information</p>
    <p>${req.protocol}://${req.get('host')}</p>`;

  try {
    await sendEmail({
      email,
      subject: 'Confirm Your Registration',
      html,
    });
    res.status(200).json({
      success: true,
      data: 'Email Sent',
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse('Email could not be sent', 500));
  }
});

// @desc Activate account (Finish Registration)
// @route POST /api/v1/auth/activation
// @access Public

export const activateRegisteredUser = asyncHandler(async (req, res, next) => {
  const { token } = req.body;

  if (!token) {
    return next(new ErrorResponse('Invalid or Expired Link', 401));
  }

  jwt.verify(
    token,
    process.env.JWT_ACCOUNT_ACTIVATION,
    async (err, decoded) => {
      if (err) next(new ErrorResponse('Invalid or Expired Link', 401));
      const { name, email, lastName, password } = decoded;

      let userActivated = await User.findOne({ email });

      if (userActivated) {
        return next(
          new ErrorResponse(`User ${email} has already been activated`, 401)
        );
      }

      await User.create({
        name,
        email,
        lastName,
        password,
      });

      return res.json({
        success: true,
        message: 'Account has been activated',
        email: email,
      });
    }
  );
});
