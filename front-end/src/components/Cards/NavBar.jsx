import React, { useContext, useState } from 'react';
import MyContext from '../../context/Context';
import { clearLocalStorage } from '../../utils/localStorage';
import { useHistory } from 'react-router-dom';

function NavBar() {
  // const [logout, setLogout] = useState(false);
  const { user } = useContext(MyContext);
  const history = useHistory();

  const handleLogout = () => {
    console.log('logout', history);
      clearLocalStorage();
      history.push('/');

  };
  console.log(history);

  return (
    <div className="nav-bar">
      <button
        data-testid="customer_products__element-navbar-link-products"
        type="button"
      >
        produtos
      </button>
      <button
        data-testid="customer_products__element-navbar-link-orders"
        type="button"
      >
        pedidos
      </button>
      <h3 data-testid="customer_products__element-navbar-user-full-name">
        { user.name }
      </h3>
      <button onClick={ handleLogout }
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        sair
      </button>
    </div>
  );
}

export default NavBar;
