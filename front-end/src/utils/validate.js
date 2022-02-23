const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  const isValidEmail = emailRegex.test(email); 
   if(!isValidEmail) return { message: 'email inválido!'}
   return true;
}

const validatePassword = (password) => {
  if(password.length < 6) return { message: 'a senha deverá ter no mínimo 6 caracteres!' }
  return true;
}

module.exports = {
  validateEmail,
  validatePassword,
}
