import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import { fetchCustomerProducts } from '../utils/axios';

const MyProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  // const [quantity, setQuantity] = useState(0);

  const getProducts = async () => {
    const { data } = await fetchCustomerProducts();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const value = {
    products,
    user,
    setUser,
  };

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default MyProvider;
