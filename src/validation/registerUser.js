import Joi from 'joi';

export const createUsersSchema = Joi.object({
  fullName: Joi.string()
    .pattern(/^[A-Za-z]+[A-Za-z\s]*$/)
    .min(3)
    .max(50)
    .messages({
      'string.pattern.base': 'The full name must be a valid string',
    })
    .required(),
  email: Joi.string().email().required(),
  dateOfBirth: Joi.date().required(),
  heardFrom: Joi.string().valid('social media', 'friends', 'found myself'),
});
