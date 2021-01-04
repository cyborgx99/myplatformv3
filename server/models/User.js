import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please add a lastname'],
    },
    email: {
      required: [true, 'Please add a valid email'],
      unique: true,
      type: String,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid email',
      ],
    },
    role: {
      type: String,
      enum: ['student', 'teacher'],
      default: 'student',
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minlength: 6,
      //   not gonna return password by default
      select: false,
    },
    resetPasswordToken: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
