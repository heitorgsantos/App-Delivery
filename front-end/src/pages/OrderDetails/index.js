import React, { useCallback, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import Button from '../../components/Button/index';
import TableHead from '../../components/TableHead/index';
import { getOrdersById } from '../../utils/axios';
import { sellers } from '../../constants/sellers';
import TableData from '../../components/TableData';

const OrderDetails = ({ match }) => {
  const customerOrder = 'customer_order_details__';
  const sellerName = 'element-order-details-label-seller-name';
  const deliveryStatus = 'element-order-details-label-delivery-status';
  const [orderDetails, setOrderDetails] = useState([]);
  const getOrders = useCallback(
    async () => {
      const { params: { id } } = match;
      const response = await getOrdersById(id);
      setOrderDetails(response.data.filter((order) => order.id === Number(id)));
    }, [match],
  );

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <div>
      { orderDetails.map((orderDetail) => (
        <>
          <div>
            <h3>
              Pedido:
              { ' ' }
              <span
                data-testid={ `${customerOrder}element-order-details-label-order-id` }
              >
                { orderDetail.id }
              </span>
            </h3>
            { sellers
              .filter((sell) => sell.id === orderDetail.seller_id)
              .map((seller) => (
                <h3
                  key={ seller.id }
                >
                  Vendedor:
                  { ' ' }
                  <span
                    data-testid={ `${customerOrder}${sellerName}` }
                  >
                    { seller.name }
                  </span>
                </h3>
              ))}
            <h3
              data-testid={ `${customerOrder}element-order-details-label-order-date` }
            >
              { orderDetail.createdAt.split('T')[0].replaceAll('-', '/') }
            </h3>
            <h3
              data-testid={ `${customerOrder}${deliveryStatus}` }
            >
              { orderDetail.status }
            </h3>
            <Button
              dataTest={ `${customerOrder}button-delivery-check` }
              text="Marcar com entregue"
            />
          </div>
          <table>
            <TableHead />
            { orderDetail.products.map((product, index) => (
              <tr key={ product.id }>
                <TableData
                  content={ index + 1 }
                />
                <TableData
                  content={ product.name }
                />
                <TableData
                  content={ product.quantity }
                />
                <TableData
                  content={ product.price }
                />
                <TableData
                  content={ product.quantity * product.price }
                />
              </tr>
            ))}
          </table>
          <h3
            data-testid="customer_checkout__element-order-total-price"
          >
            { orderDetail.products
              .reduce((totalPrice, {
                price,
                quantity,
              }) => totalPrice + price * quantity, 0)}
          </h3>
        </>
      ))}
    </div>
  );
};

OrderDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default OrderDetails;
