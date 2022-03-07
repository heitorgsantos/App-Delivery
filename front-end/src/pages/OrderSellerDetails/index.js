import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSellerOrdersById } from '../../utils/axios';
import TableData from '../../components/TableData';
import TableHead from '../../components/TableHead';

const OrderSellerDetails = ({ match }) => {
  const sellerOrder = 'seller_order_details__';
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(
    async () => {
      const { params: { id } } = match;
      const response = await getSellerOrdersById(id);
      const filteredResponse = response.data
        .filter((sell) => sell.id === Number(id))
        .map((prod) => ({
          ...prod,
          /* Por enquanto está renderizando com um mock */
          products: [{ id: 11, name: 'Stella Artois', quantity: 4, price: 3.49 }] }));
      setOrders(filteredResponse);
    }, [match],
  );

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <>
      { orders.map((order) => (
        <div key={ order.id }>
          <h3>
            Pedido:
            { ' ' }
            <span
              data-testid={ `${sellerOrder}element-order-details-label-order-id` }
            >
              { order.id }
            </span>
          </h3>
          <h3
            data-testid={ `${sellerOrder}element-order-details-label-order-date` }
          >
            { new Date(order.sale_date).toLocaleDateString('pt-br') }
          </h3>
          <h3
            data-testid={ `${sellerOrder}element-order-details-label-delivery-status` }
          >
            { order.status }
          </h3>
          <button
            type="button"
            data-testid={ `${sellerOrder}button-preparing-check` }
          >
            Preparar pedido
          </button>
          <button
            type="button"
            data-testid={ `${sellerOrder}button-dispatch-check` }
          >
            Saiu para entrega
          </button>
          <table>
            <TableHead />
            { order.products.map((product, index) => (
              <tbody key={ product.id }>
                <tr>
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
                    content={ product.price
                      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
                  />
                  <TableData
                    content={ (product.price * product.quantity)
                      .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
                  />
                </tr>
              </tbody>
            ))}
          </table>
          <h3
            data-testid={ `${sellerOrder}element-order-total-price` }
          >
            { Number(order.total_price)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
          </h3>
        </div>
      ))}
    </>
  );
};

OrderSellerDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default OrderSellerDetails;
