import React from 'react';
import { useHistory } from 'react-router-dom';
// import { getLocalStorage } from '../../utils/localStorage';

function Home() {
  const path = '/login';

  const history = useHistory();
  // if (getLocalStorage('user.role') === 'customer') {
  //   path = '/customer/products';
  // }
  // if (getLocalStorage('user.role') === 'seller') {
  //   path = '/seller/orders';
  // }
  return (
    <>
      { history.push(path) }
    </>
  );
}

export default Home;
