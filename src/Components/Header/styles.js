import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #FFFFFF;
  border-bottom: 1px solid #DBDBDB;
  
   position: sticky;
  top: 0;
  z-index: 20;

  display: flex;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 975px; 
  height: 60px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between; 
`;

export const LogoText = styled.h1`
  font-family: 'Grand Hotel', cursive;
  font-size: 28px; 
  color: #262626;
  margin: 0;
  cursor: pointer;
`;

export const IconNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 22px; 
`;

export const IconContainer = styled.div`
  position: relative; /
  display: flex; 
  align-items: center;
  
  svg {
    font-size: 26px;
    color: #262626;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: -5px;  
  right: -8px; 

  background-color: #FF3040; 
  color: #FFFFFF;
  font-weight: 600;
  font-size: 10px; 

  padding: 2px 5px;
  border-radius: 10px;

  border: 1px solid #FFFFFF;
`;