import styled from 'styled-components';

export const NavWrapper = styled.nav`
  position: fixed; 
  bottom: 0;  
  left: 0;
  width: 100%;
  height: 50px; 
  
  background-color: #FFFFFF;
  border-top: 1px solid #DBDBDB;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 10px;
  z-index: 20; 
 
  svg {
    font-size: 28px;
    color: #262626;
    cursor: pointer;
    
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const ProfileIcon = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid #262626;
  cursor: pointer;
`;