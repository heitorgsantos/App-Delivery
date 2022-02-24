import axios from 'axios';

const postRegisterData = async (data) => {
  try {
    const URL = 'http://localhost:3001/register';
    const response = await axios.post(URL, data, {
      mode: 'no-cors',
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export default postRegisterData;
