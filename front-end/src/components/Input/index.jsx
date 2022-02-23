import React from 'react';
import PropTypes from 'prop-types';

function Input({ dataTest, value, id, placeholder, type, handleChange }) {
  return (
    <label htmlFor={ id }>
      <input
        data-testid={ dataTest }
        type={ type }
        placeholder={ placeholder }
        value={ value }
        id={ id }
        onChange={ handleChange }
      />
    </label>

  );
}

Input.propTypes = {
  dataTest: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

};

export default Input;
