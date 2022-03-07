import React from 'react';
import NavBar from '../../components/Cards/NavBar';
import SellerOrders from '../../components/Orders/SellerOrders';
import MyContext from '../../context/Context';

function SellerOrder() {
  const { sellerOrders } = React.useContext(MyContext);
  return (
    <>
      <NavBar />
      <div>
        { sellerOrders.map((sellerOrder) => (
          <SellerOrders
            key={ sellerOrder.id }
            sellerOrder={ sellerOrder }
          />
        )) }
      </div>
    </>
  );
}

export default SellerOrder;
