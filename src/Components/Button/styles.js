import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 8px; 
  background-color: #0095F6; 
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

 
  &:hover {
    background-color: #1877F2;
  }

  &:disabled {
    background-color: #B2DFFC;
    cursor: not-allowed;
  }
`;