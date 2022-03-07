import React from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';

function Home() {
  let path = '/login';

  const history = useHistory();
  if (getLocalStorage('user')) {
    path = '/customer/products';
  }
  return (
    <>
      { history.push(path) }
    </>
  );
}

export default Home;
