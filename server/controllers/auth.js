import User from '../models/User.js';
import sendEmail from '../utils/emailSender.js';
import asyncHandler from '../middleware/asyncHandler.js';
import jwt from 'jsonwebtoken';
import ErrorResponse from '../middleware/ErrorResponse.js';

// helper function create message to send via email
const htmlMessage = (req, email) => {
  const token = jwt.sign({ email }, process.env.JWT_ACCOUNT_ACTIVATION, {
    expiresIn: '60m',
  });

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
  return html;
};

// @desc Register user and send Confirm Registration Link to User's Email
// @route POST /api/v1/auth/register
// @access Public

export const registerUser = asyncHandler(async (req, res, next) => {
  const { name, lastName, email, password } = req.body;

  // Check if user already in DB
  let user = await User.findOne({ email });
  if (user) {
    return next(new ErrorResponse('User Already Exists', 400));
  }

  const html = htmlMessage(req, email);

  // validation done by Mongoose
  await User.create({
    name,
    email,
    lastName,
    password,
  });

  try {
    await sendEmail({
      email,
      subject: 'Confirm Your Registration',
      html,
    });
    res.status(200).json({
      success: true,
      data: 'Confirmation Email Has Been Sent',
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse('Email could not be sent', 500));
  }
});

// @desc Activate account (Verify Email)
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
      if (err) {
        return next(new ErrorResponse('Invalid or Expired Link', 401));
      }
      const { email } = decoded;
      let user = await User.findOne({ email });

      if (user.emailVerified === true) {
        return next(
          new ErrorResponse(`${email} has already been verified`, 401)
        );
      }

      user = await User.findByIdAndUpdate(
        user.id,
        { emailVerified: true },
        {
          new: true,
          runValidators: true,
        }
      );

      return res.json({
        success: true,
        message: 'Account has been activated',
        email: email,
      });
    }
  );
});

// @desc Send reset password link to email
// @route POST /api/v1/auth/reset-request
// @access Public
export const resetPasswordRequest = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    return next(new ErrorResponse('Something Went Wrong Try Again', 400));
  }

  // creating reset token
  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_RESET_PASSWORD,
    {
      expiresIn: '15m',
    }
  );

  // Set reset link (token) in DB
  user = await User.findByIdAndUpdate(
    user.id,
    { resetPasswordLink: token },
    {
      new: true,
      runValidators: false,
    }
  );

  // Message with token
  const html = `
  <p>Hello there :) </p>
  <a href="${req.protocol}://${req.get(
    'host'
  )}/api/v1/reset-password/${token}">Click Me To Reset Your Password</a>
  <hr />
  <p>Or use the following link to reset your password:</p>
  <p>${req.protocol}://${req.get('host')}/api/v1/reset-password/${token}</p>
  <hr />
  <p>This email may contain sensitive information</p>
  <p>${req.protocol}://${req.get('host')}</p>
  `;

  // Sending reset token via email
  try {
    await sendEmail({
      email,
      subject: 'Password Reset',
      html,
    });
    res.status(200).json({
      success: true,
      data: 'Check Your Email',
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse('Email could not be sent', 500));
  }
});

// @desc Set New Password Using Link From Email
// @route POST /api/v1/auth/reset-password
// @access Public

export const setNewPassword = asyncHandler(async (req, res, next) => {
  const { resetPasswordLink, newPassword } = req.body;

  jwt.verify(
    resetPasswordLink,
    process.env.JWT_RESET_PASSWORD,
    async (err, decoded) => {
      if (err) {
        return next(new ErrorResponse('Invalid or Expired Link', 401));
      }
      let user = await User.findOne({ resetPasswordLink });
      if (!user) {
        return next(new ErrorResponse('Invalid or Expired Link', 401));
      }

      // Set new password
      user.password = newPassword;
      user.resetPasswordLink = undefined;
      await user.save();

      res.status(200).json({
        success: true,
        data: 'Use New Password To Log In',
      });
    }
  );
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //   Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid Credentials'), 401);
  }

  if (user.emailVerified === false) {
    const html = htmlMessage(req, email);
    try {
      await sendEmail({
        email,
        subject: 'Confirm Your Registration',
        html,
      });
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('Email could not be sent', 500));
    }

    return next(new ErrorResponse('Please Verify Your Email'), 401);
  }

  // Check if passwords match
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid Credentials'), 401);
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_TOKEN,
    {
      expiresIn: '3d',
    }
  );

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(200).cookie('token', token, options).json({
    success: true,
    token,
  });
});
