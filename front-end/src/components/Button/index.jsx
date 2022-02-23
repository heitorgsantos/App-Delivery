import React from 'react'

function Button({ dataTest, text, handleClick }) {
  return (
    <button
      onClick={ handleClick }
      type="button"
      data-testid={ dataTest }
    >
      { text }
    </button>
  );
}

export default Button;
