const { loginUserService } = require("../../services/users/loginUser");

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const login = await loginUserService({ email, password })
    
    return res.status(201).json(create);
  } catch (error) {
    return next(error);
  };
};