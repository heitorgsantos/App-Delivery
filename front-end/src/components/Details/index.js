import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input/index';
import MyContext from '../../context/Context';
import { postOrderProducts } from '../../utils/axios';

const Details = ({ address, handleChange }) => {
  const history = useHistory();
  const { user, cartItems } = useContext(MyContext);

  const getId = async () => {
    const response = await postOrderProducts(cartItems
      .filter((prod) => prod.quantity !== 0), user.token);
    console.log(response.data);
  };

  const handleClick = async () => {
    getId();
    history.push(`/customer/orders/${id}`);
  };
  return (
    <>
      <label htmlFor="seller-select">
        Vendedor:
        <select
          id="seller-select"
          data-testid="customer_checkout__select-seller"
        >
          <option value="seller">Fulana</option>
        </select>
      </label>
      <Input
        text="Endereço "
        placeholder="Rua Tão Longe, Cidade Far Away"
        dataTest="customer_checkout__input-address"
        size="50"
        name="address"
        value={ address.address }
        id="address-input"
        handleChange={ handleChange }
      />
      <Input
        text="Número "
        placeholder="123"
        dataTest="customer_checkout__input-addressNumber"
        name="number"
        id="number-input"
        handleChange={ handleChange }
        value={ address.number }
      />
      <Button
        text="Finalizar pedido"
        handleClick={ handleClick }
        dataTest="customer_checkout__button-submit-order"
      />
    </>
  );
};

Details.propTypes = {
  address: PropTypes.shape({
    address: PropTypes.string,
    number: PropTypes.number,
  }),
  handleChange: PropTypes.func,
}.isRequired;

export default Details;
