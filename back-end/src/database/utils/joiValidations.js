const Joi = require('joi');

const schemaUser = Joi.object({
  name: Joi.string().max(11).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = {
  schemaUser,
};
