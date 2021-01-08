import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      trim: true,
      required: true,
      unique: true,
    },
    skype: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/cyborgx999/image/upload/v1600122730/sayprivet/ujjxn9rmbuknai9u5vao.png',
    },
    telegram: {
      type: String,
      trim: true,
    },
    whatsApp: {
      type: String,
      trim: true,
    },
    goals: {
      type: String,
      trim: true,
    },
    myHobbies: {
      type: String,
      trim: true,
    },
    birthday: {
      type: String,
      trim: true,
    },

    bio: {
      type: String,
      trim: true,
    },
    youtube: {
      type: String,
      trim: true,
    },
    twitter: {
      type: String,
      trim: true,
    },
    facebook: {
      type: String,
      trim: true,
    },
    linkedin: {
      type: String,
      trim: true,
    },
    instagram: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Profile', ProfileSchema);
