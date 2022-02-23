import React from 'react';

function Input({ dataTest, value, id, placeholder, type }) {

  return (
     <label htmlFor={ id }>
       <input 
        data-testid={ dataTest }
        type={ type }
        placeholder={ placeholder }
        value={ value }
        id={ id }
      />
     </label>   
      
  );
}


export default Input;
