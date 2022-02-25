import axios from 'axios';

export const postRegisterData = async (data) => {
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

const postLoginData = async (data) => {
  try {
    const URL = 'http://localhost:3001/login';
    const response = await axios.post(URL, data, {
      mode: 'no-cors',
    });
    return response;
  } catch (error) {
    if (error.response) {
      return error.response.status;
    } if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error:', error.message);
    }
  }
};

const fetchCustomerProducts = async () => {
  try {
    const URL = 'http://localhost:3001/customer/products';
    const response = await axios.get(URL, {
      mode: 'no-cors',
    });
    return response;
  } catch (error) {
    if (error.response) {
      return error.response.status;
    } if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error:', error.message);
    }
  }
};

export { postLoginData, fetchCustomerProducts };
