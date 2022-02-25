const Joi = require('joi');

const schemaUser = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  name: Joi.string().min(11).required(),
});

const schemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const schemaSales = Joi.object({
  total_price: Joi.number(),
  // Joi.decimal().greater(100.0)
  delivery_address: Joi.string(),
  products: Joi.array().required(),
  delivery_number: Joi.string(),
  sale_date: Joi.required(),
  status: Joi.string(),
  user_id: Joi.number(),
  seller_id: Joi.number(),
});

module.exports = {
  schemaUser,
  schemaLogin,
  schemaSales,
};
