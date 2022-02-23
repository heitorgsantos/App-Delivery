const { user } = require('../../models/index');
const constructorError = require('../../utils/constructorError');
const { schemaUser } = require('../../utils/joiValidations');
const md5 = require('md5');

// const validateUser = (name, email, password, role) => {
//   const { error } = schemaUser.validate({ name, email, password, role })
//   if(error) throw constructorError(400, error.message);
//   return true;
// }

// const findUserService = async (email) => await user.findOne({ where: { email }});

const createUserService = async ({ name, email, password }) => {
  const { error } = schemaUser.validate({ name, email, password })
  if(error) throw constructorError(400, error.message);

  const find = await user.findOne({ where: { email }});

  if (find) throw constructorError(409, 'User already registered');

  // const hashMd5 = md5(password);
  password = md5(password);
  await user.create({ name, email, password });

  return password;
};

module.exports = {
  createUserService,
};