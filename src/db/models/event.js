import { model, Schema } from 'mongoose';

const eventsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    event_date: {
      type: Date,
      required: true,
    },

    organizer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const EventsCollection = model('events', eventsSchema);
