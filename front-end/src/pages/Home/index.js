import React from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';

function Home() {
  let path = '/';

  if (getLocalStorage('user')) {
    path = '/customer/products';
  }
  const history = useHistory();
  return (
    <>
      { history.push(path) }
    </>
  );
}

export default Home;
