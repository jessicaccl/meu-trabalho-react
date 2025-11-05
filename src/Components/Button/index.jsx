import React from 'react';
import { ButtonContainer } from './styles';

function Button({ children, onClick, type = "button", disabled = false }) {
  return (
    <ButtonContainer 
      onClick={onClick} 
      type={type} 
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;