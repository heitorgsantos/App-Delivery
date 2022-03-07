import React from 'react';
import NavBar from '../../components/Cards/NavBar';
import CardOrder from '../../components/Orders';
import MyContext from '../../context/Context';

function Orders() {
  const { orders } = React.useContext(MyContext);
  return (
    <>
      <NavBar />
      <div className="orders-cards">
        { orders.map((order) => (
          <CardOrder
            key={ order.id }
            order={ order }
          />
        )) }
      </div>
    </>
  );
}

export default Orders;
