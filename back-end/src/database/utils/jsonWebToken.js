const jwt = require('jsonwebtoken');
const secret = 'secret_key';

// cria token JWT

const createToken = (data) => {
  const token = jwt.sign(data, secret, { expiresIn: '24h', algorithm: 'HS256' });
  return token;
}

const verifyToken = (token) => {
  const decoded = jwt.verify(token, secret);
  return decoded;
}

module.exports = {
  createToken,
  verifyToken,
};
