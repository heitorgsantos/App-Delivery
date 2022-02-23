import React from 'react';

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


export default Input;
