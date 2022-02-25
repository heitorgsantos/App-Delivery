const crypto = require('crypto');

const encryptPassword = (password) => {
  const encryptedPassword = crypto.createHash('md5').update(password).digest('hex');
  return encryptedPassword;
};

module.exports = { encryptPassword };
