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

export const createRegisterUserController = async (req, res) => {
  const { eventId } = req.params;
  const formData = req.body;
  const user = await createRegisterUser(req.body, eventId);
  if (!eventId) {
    throw createHttpError(404, 'User not found');
  }

  res.status(201).json({
    status: 201,
    message: `Successfully created a user!`,
    data: user,
  });
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
