import {
  createRegisterUser,
  getAllEvents,
  getAllRegisteredUsers,
} from '../services/events.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

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
  const user = await createRegisterUser(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a user!`,
    data: user,
  });
};

export const getUsersController = async (req, res) => {
  const users = await getAllRegisteredUsers();

  res.json({
    status: 200,
    message: 'Successfully found users!',
    data: users,
  });
};
