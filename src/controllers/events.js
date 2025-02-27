import {
  createRegisterUser,
  getAllEvents,
  getAllRegisteredUsers,
} from '../services/events.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import createHttpError from 'http-errors';

export const getEventsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const events = await getAllEvents({
    page,
    perPage,
    sortBy,
    sortOrder,
  });

  res.json({
    status: 200,
    message: 'Successfully found events!',
    data: events,
  });
};

export const createRegisterUserController = async (req, res, next) => {
  try {
    const { eventId } = req.params; // Get eventId from URL
    if (!eventId) {
      throw createHttpError(400, 'Event ID is required');
    }

    const formData = { ...req.body, eventId }; // Ensure eventId is included only once
    const user = await createRegisterUser(formData);

    res.status(201).json({
      status: 201,
      message: `Successfully created a user!`,
      data: user,
    });
  } catch (error) {
    console.error('Error in createRegisterUserController:', error); // Logs the actual error

    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: 'User is already registered for this event.' });
    }

    next(error); // Pass any other errors to the global error handler
  }
};

export const getUsersController = async (req, res) => {
  const { eventId } = req.params;
  const filter = parseFilterParams(req.query);

  const users = await getAllRegisteredUsers(filter, eventId);
  if (!users || users.length === 0) {
    return res.status(404).json({
      status: 404,
      message: 'No users found for this event!',
    });
  }

  res.json({
    status: 200,
    message: 'Successfully found users!',
    data: users,
  });
};
