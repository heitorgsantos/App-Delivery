import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../context/Context';
import NavBar from '../../components/Cards/NavBar';
import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';
import Details from '../../components/Details';

const Checkout = () => {
  const { cartItems, totalPrice, getTotalPrice, setCartItems } = useContext(MyContext);
  const [address, setAddress] = useState({
    address: '',
    number: 0,
  });

  useEffect(() => {
    getTotalPrice();
  }, [getTotalPrice]);

  const handleChange = ({ target: { name, value } }) => {
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <>
      <NavBar />
      <table>
        <TableHead />
        { cartItems
          .filter((product) => product.quantity !== 0)
          .map((cartItem, index) => (
            <TableBody
              key={ cartItem.id }
              cartItem={ cartItem }
              index={ index }
              handleClick={ handleClick }
            />
          ))}
      </table>
      <div>
        Total:
        { ' ' }
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          { totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
        </span>
      </div>
      <div>
        <Details
          address={ address }
          handleChange={ handleChange }
        />
      </div>
    </>
  );
};

export default Checkout;
