const validateEmail = (setState, email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const isValidEmail = emailRegex.test(email);
  if (!isValidEmail) {
    setState(true);
    return false;
  }
  return true;
};

const validatePassword = (setState, password) => {
  const maxLength = 6;
  if (password.length < maxLength) {
    setState(true);
    return false;
  }
  return true;
};

module.exports = {
  validateEmail,
  validatePassword,
};
