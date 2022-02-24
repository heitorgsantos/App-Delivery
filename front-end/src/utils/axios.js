const axios = require('axios');

const postLoginData = async (data) => {
  const URL = 'http://localhost:3001/login';
  const response = await axios.post(URL, data, {
    mode: 'no-cors',
  });
  return response;
};

module.exports = { postLoginData };
