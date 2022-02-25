import React from 'react';
import PropTypes from 'prop-types';

function Input({ dataTest, value, id, placeholder, type, handleChange, text, name }) {
  return (
    <label htmlFor={ id }>
      { text }
      <input
        data-testid={ dataTest }
        type={ type }
        placeholder={ placeholder }
        value={ value }
        id={ id }
        name={ name }
        onChange={ handleChange }
        autoComplete="off"
      />
    </label>

  );
}

Input.propTypes = {
  dataTest: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
