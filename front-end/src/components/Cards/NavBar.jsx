import React from 'react';

function NavBar() {
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
        nome do cliente
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
