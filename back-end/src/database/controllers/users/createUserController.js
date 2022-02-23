const { createUserService } = require("../../services/users/createUser");

module.exports = async (req, res, next) => {
  try {
    const { name, email, password} = req.body;
    const createHash = await createUserService({ name, email, password });

    return res.status(201).json(createHash);
  } catch (error) {
    return next(error);
  };
};