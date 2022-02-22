const Joi = require('joi');

const schemaUser = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
  role: Joi.string().required(),
});

module.exports = {
  schemaUser,
};
