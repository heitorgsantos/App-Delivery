import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../../context/Context';
import { clearLocalStorage } from '../../utils/localStorage';

function NavBar() {
  // const [logout, setLogout] = useState(false);
  const { user } = useContext(MyContext);
  const history = useHistory();

  const handleLogout = () => {
    console.log('logout', history);
    clearLocalStorage();
    history.push('/');
  };

  return (
    <nav className="nav-bar">
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => history.push('/customer/products') }
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/*') }
      >
        Pedidos
      </button>
      <h3 data-testid="customer_products__element-navbar-user-full-name">
        { user.name }
      </h3>
      <button
        type="button"
        onClick={ handleLogout }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </nav>
  );
}

export default NavBar;
