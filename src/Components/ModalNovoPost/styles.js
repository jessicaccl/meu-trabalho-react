import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); 
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; 
`;

export const ModalContent = styled.div`
  background-color: #FFFFFF;
  border-radius: 12px;
  width: 90%;
  max-width: 500px; 
  min-height: 300px; 
  
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #DBDBDB;

  h3 {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #262626;
`;

export const ModalBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  textarea {
    width: 100%;
    min-height: 100px;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    padding: 8px;
    font-family: inherit;
    font-size: 14px;
    resize: vertical; 
  }

  input {
    width: 100%;
    border: 1px solid #DBDBDB;
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
  }
`;