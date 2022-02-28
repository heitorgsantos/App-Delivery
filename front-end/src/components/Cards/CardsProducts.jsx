import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import MyContext from '../../context/Context';

// import fetch from 'node-fetch';
// import { fetchCustomerProducts } from '../../utils/axios';

function CardsProducts() {
  const { products } = useContext(MyContext);
  const history = useHistory();
  const [quantity, setQuantity] = React.useState(0);

  // set quantity from product.id
  const handleAddQuantity = (id) => {
    if (products.find((product) => product.id === id)) {
      setQuantity(quantity + 1);
    }
  };

  // set quantity from product.id
  const handleRemQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleCheckout = () => {
    if (quantity > 0) {
      history.push('/customer/checkout');
    }
  };

  return (
    <div className="products-cards">
      {products.map((product) => (
        <div className="product-card" key={ product.id }>
          <h1
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            { product.name }

          </h1>
          <h2
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {` R$${product.price.toString().replace('.', ',')} `}

          </h2>
          <img
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
            src={ product.url_image }
            alt={ product.name }
          />
          <div className="product-quantity">
            <button
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              type="button"
              onClick={ handleRemQuantity }
            >
              -
            </button>
            <input
              data-testid={ `customer_products__input-card-quantity-${product.id}` }
              type="number"
              name="quantity"
              value={ quantity }
            />
            <button
              data-testid={ `customer_products__button-card-add-item-${product.id}` }
              type="button"
              onClick={ () => handleAddQuantity(product.id) }
            >
              +
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={ handleCheckout }
        className="product-card"
        data-testid="customer_products__button-cart"
        type="button"
      >
        <h5 data-testid="customer_products__button-cart">
          total
        </h5>
      </button>
    </div>
  );
}

export default CardsProducts;
