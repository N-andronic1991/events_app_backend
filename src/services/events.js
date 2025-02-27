import { EventsCollection } from '../db/models/event.js';
import { RegistrationCollection } from '../db/models/registration.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getAllEvents = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',
}) => {
  const skip = (page - 1) * perPage;

  const [eventsCount, events] = await Promise.all([
    EventsCollection.find().countDocuments(),
    EventsCollection.find()
      .skip(skip)
      .limit(perPage)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(eventsCount, perPage, page);
  if (paginationData.page > paginationData.totalPages) return [];

  return {
    data: events,
    ...paginationData,
  };
};

export const createRegisterUser = async (payload) => {
  const user = await RegistrationCollection.create(payload);
  return user;
};

export const getAllRegisteredUsers = async (filter = {}, eventId) => {
  const query = {};

  if (eventId) {
    query.eventId = eventId;
  }

  if (filter.fullName) {
    query.fullName = filter.fullName;
  }

  if (filter.email) {
    query.email = filter.email;
  }

  console.log('Event ID:', eventId);
  console.log('Filter Params:', filter);

  const users = await RegistrationCollection.find(query).exec();

  return users;
};
