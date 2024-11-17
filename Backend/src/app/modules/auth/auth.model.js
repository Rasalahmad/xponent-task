import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import config from '../../../config/index.js';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

// hashing user password
UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_rounds)
  );

  next();
});

UserSchema.statics.emailExists = async function (phoneNumber) {
  const user = await this.findOne({ phoneNumber });
  return !!user;
};

UserSchema.statics.isPasswordMatched = async function (
  givenPassword,
  savedPassword
) {
  return await bcrypt.compare(givenPassword, savedPassword);
};

export const User = model('User', UserSchema);
