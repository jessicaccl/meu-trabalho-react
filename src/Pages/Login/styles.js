import styled, { keyframes } from 'styled-components';

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  background-color: #FAFAFA;
  padding: 0 20px;
  position: relative; 
  overflow: hidden;  
`;

export const LoginBox = styled.div`
  width: 100%;
  padding: 40px 20px;
  background-color: #FFFFFF; 
  border: 1px solid #DBDBDB; 
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

export const LogoImage = styled.img`
  width: 175px; 
  margin-bottom: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px; 
  width: 80%;
`;

export const FloatingIcon = styled.span`
  position: absolute; 
  z-index: 0; 

  top: ${props => props.$top || 'auto'};
  left: ${props => props.$left || 'auto'};
  right: ${props => props.$right || 'auto'};
  bottom: ${props => props.$bottom || 'auto'};

  font-size: ${props => props.$size || '40px'};
  opacity: 0.6;
  
  animation: ${floatAnimation} ${props => props.$duration || '5s'} infinite ease-in-out;
  
  transition: opacity 0.3s ease, filter 0.3s ease;
  
  &:hover {
    opacity: 1; 
    cursor: pointer; 
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)); 
    animation-play-state: paused; 
  }
`;
export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #8E8E8E;
  font-size: 13px;
  font-weight: 600;
  margin: 15px 0;
  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #DBDBDB;
  }
  &::before {
    margin-right: 18px;
  }
  &::after {
    margin-left: 18px;
  }
`;

export const FacebookLink = styled.a`
  display: block;
  margin: 15px 0;
  color: #385185; 
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  span {
    margin-right: 8px;
  }
`;

export const ForgotPassword = styled.a`
  display: block;
  color: #00376B;
  font-size: 12px;
  text-decoration: none;
  margin-top: 10px;
`;

export const SignUpBox = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #FFFFFF;
  border: 1px solid #DBDBDB;
  border-radius: 1px;
  text-align: center;
  font-size: 14px;
`;

export const SignUpText = styled.p`
  font-size: 14px;
  color: #262626;

  a {
    color: #0095F6; 
    font-weight: 600;
    text-decoration: none;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 100%;
  max-width: 400px; 
  position: relative;
`;