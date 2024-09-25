import { Router } from 'express';
import {
  getEventsController,
  createRegisterUserController,
  getUsersController,
} from '../controllers/events.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createUsersSchema } from '../validation/registerUser.js';

const router = Router();

router.get('/events', ctrlWrapper(getEventsController));

router.post(
  '/register',
  validateBody(createUsersSchema),
  ctrlWrapper(createRegisterUserController),
);

router.get('/participants', ctrlWrapper(getUsersController));

export default router;
