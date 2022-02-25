import React from 'react';
import axios from 'axios';

// import fetch from 'node-fetch';
// import { fetchCustomerProducts } from '../../utils/axios';

function CardsProducts() {
  const [products, setProducts] = React.useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/customer/products');
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => { fetchProducts(); }, []);

  console.log(products);

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
            { product.price }

          </h2>
          <img
            data-testid={ `customer_products__img-card-bg-image${product.id}` }
            src={ product.url_image }
            alt={ product.name }
          />
          <div className="product-quantity">
            <button type="button">
              +
            </button>
            <h5>
              0
            </h5>
            <button type="button">
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsProducts;
