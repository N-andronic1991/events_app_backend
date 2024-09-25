import { RegistrationCollection } from '../db/models/registration.js';
import {
  createRegisterUser,
  getAllEvents,
  getAllRegisteredUsers,
} from '../services/events.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

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
  const { fullName, email, dateOfBirth } = req.body;

  // Basic validation
  if (!fullName || !email || !dateOfBirth) {
    return res.status(400).json({
      status: 400,
      message: 'Missing required fields',
    });
  }

  const user = await createRegisterUser(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a user!`,
    data: user,
  });
};

export const getUsersController = async (req, res) => {
  const filter = parseFilterParams(req.query);

  const users = await getAllRegisteredUsers({ filter });
  if (!users) {
    return [];
  }

  res.json({
    status: 200,
    message: 'Successfully found users!',
    data: users,
  });
};
