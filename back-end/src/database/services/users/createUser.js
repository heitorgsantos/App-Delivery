const { users } = require('../../models/index');
const constructorError = require('../../utils/constructorError');
const { schemaUser } = require('../../utils/joiValidations');

// const validateUser = (name, email, password, role) => {
//   const { error } = schemaUser.validate({ name, email, password, role })
//   if(error) throw constructorError(400, error.message);
//   return true;
// }

const findUserService = async ({ email }) => await users.findOne({ where: { email }});

const createUserService = async ({ name, email, password, role }) => {

  const { error } = schemaUser.validate({ name, email, password, role })

  if(error) throw constructorError(400, error.message);

  const create = await users.create({ name, email, password, role });

  // if (!findUserService({ email })) throw constructorError(409, 'User already registered');

  return create;
};

module.exports = {
  createUserService,
};