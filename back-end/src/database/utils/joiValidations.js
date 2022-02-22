const Joi = require('joi');

const schemaUser = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  role: Joi.string().required(),
});

module.exports = {
  schemaUser,
};
