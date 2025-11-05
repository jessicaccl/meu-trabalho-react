import { FiHeart } from 'react-icons/fi';
import { BsMessenger } from 'react-icons/bs';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  HeaderWrapper,
  HeaderContainer,
  LogoText,
  IconNav,
  IconContainer,
  NotificationBadge
} from './styles';

function Header() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>

        <LogoText onClick={goToHome}>
          MyLifeGram
        </LogoText>

        <IconNav>

          <FiHeart />

          <IconContainer>

            <BsMessenger />

            <NotificationBadge>3</NotificationBadge>
          </IconContainer>

        </IconNav>

      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;