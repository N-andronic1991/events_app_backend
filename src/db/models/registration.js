import { model, Schema } from 'mongoose';
// import mongoose from 'mongoose';
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
    eventId: {
      type: String,
      ref: 'EventCollection',
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

registrationSchema.index({ email: 1, eventId: 1 }, { unique: true });
export const RegistrationCollection = model('registration', registrationSchema);
