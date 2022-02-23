import React from 'react';
import PropTypes from 'prop-types';

function Button({ dataTest, text, handleClick, disabled }) {
  return (
    <button
      onClick={ handleClick }
      type="button"
      data-testid={ dataTest }
      disabled={ disabled }
    >
      { text }
    </button>
  );
}

Button.propTypes = {
  dataTest: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,

};

export default Button;
