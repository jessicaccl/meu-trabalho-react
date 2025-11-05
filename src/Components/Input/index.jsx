import React from 'react';
import { InputContainer } from './styles';

function Input({ type, placeholder, value, onChange }) {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;