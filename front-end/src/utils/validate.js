const validateEmail = (setState, email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const isValidEmail = emailRegex.test(email); 
   if(!isValidEmail) return false;
   setState(true);
   return true;
};

const validatePassword = (setState, password) => {
  if(password.length < 6) return false;
  setState(true);
  return true;
};

module.exports = {
  validateEmail,
  validatePassword,
};

