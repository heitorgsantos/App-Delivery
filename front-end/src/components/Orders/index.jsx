import React from 'react';
import { useHistory } from 'react-router-dom';

function CardOrder() {
  const history = useHistory();
  const id = 1;
  return (
    <button
      onClick={ () => history.push('/customer/orders/id') }
      type="button"
    >
      <span
        data-testid={ `customer_orders__element-order-id-${id}` }
      >
        pedido
      </span>
      <span
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        status
      </span>
      <span
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        data
      </span>
      <span>valor</span>
    </button>

  );
}

export default CardOrder;
