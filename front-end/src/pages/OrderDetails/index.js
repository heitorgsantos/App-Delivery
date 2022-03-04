import React from 'react';
import Button from '../../components/Button/index';
import TableHead from '../../components/TableHead/index';

const OrderDetails = () => (
  <div>
    <div>
      <h3
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        Pedido
      </h3>
      <h3
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        Vendedor
      </h3>
      <h3
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        Data
      </h3>
      <h3
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        Status
      </h3>
      <Button
        dataTest="customer_order_details__button-delivery-check"
        text="Marcar com entregue"
      />
    </div>
    <table>
      <TableHead />
    </table>
    <h3
      data-testid="customer_checkout__element-order-total-price"
    >
      Total
    </h3>
  </div>
);

export default OrderDetails;
