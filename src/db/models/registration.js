import { model, Schema } from 'mongoose';

const registrationSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, 'Email address is required'],
    },

    dateOfBirth: {
      type: Date,
      required: true,
    },

    heardFrom: {
      type: String,
      enum: ['social media', 'friends', 'found myself'],
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);
export const RegistrationCollection = model('registration', registrationSchema);
