const { createUserService } = require("../../services/users/createUser");

module.exports = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const create = await createUserService({ name, email, password, role })
    
    return res.status(201).json(create);
  } catch (error) {
    return next(error);
  };
};