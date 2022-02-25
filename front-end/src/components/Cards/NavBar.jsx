import React, { useContext } from 'react';
import MyContext from '../../context/Context';

function NavBar() {
  const { user } = useContext(MyContext);
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
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
      >
        sair
      </button>
    </div>
  );
}

export default NavBar;
