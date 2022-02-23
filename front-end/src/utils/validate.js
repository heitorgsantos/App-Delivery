const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const isValidEmail = emailRegex.test(email); 
   if(!isValidEmail) return false;
   return true;
};

const validatePassword = (password) => {
  if(password.length < 6) return false;
  return true;
};

module.exports = {
  validateEmail,
  validatePassword,
};

