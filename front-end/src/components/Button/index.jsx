import React from 'react'

function Button({ dataTest, text }) {
  return (
    <button
      type="button"
      data-testid={ dataTest }
    >
      { text }
    </button>
  );
}

export default Button;
