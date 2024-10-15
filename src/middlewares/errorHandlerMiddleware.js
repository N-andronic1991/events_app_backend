import { isHttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (isHttpError(err)) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: {
        message: err.message,
      },
    });
  }

  if (err instanceof MongooseError) {
    return res.status(500).json({
      status: 500,
      message: 'Mongoose error',
      data: {
        message: err.message,
      },
    });
  }

  if (error.code === 11000) {
    // MongoDB duplicate key error (based on the unique compound index)
    return res
      .status(400)
      .json({ message: 'User is already registered for this event.' });
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: {
      error: err.message,
    },
  });
};
