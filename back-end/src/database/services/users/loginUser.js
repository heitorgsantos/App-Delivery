const { user } = require('../../models/index');
const constructorError = require('../../utils/constructorError');
const { schemaLogin } = require('../../utils/joiValidations');
const { createToken } = require('../../utils/jsonWebToken');
const md5 = require('md5');

// const findUserService = async (email) => await user.findOne({ where: { email }});

const loginUserService = async ({ email, password }) => {
  const { error } = schemaLogin.validate({ email, password })
  if(error) throw constructorError(400, error.message);

  const find = await user.findOne({ where: { email }});

  if (!find) throw constructorError(404, 'User not found');

  // const createHashPassword = md5(password);
  const token = createToken(find.dataValues);
  const findObject = find.dataValues;
  const completeAnswer = {
    name: findObject.name,
    email: findObject.email,
    role: findObject.role,
    token
  }

  return completeAnswer;

};

module.exports = {
  loginUserService,
};
