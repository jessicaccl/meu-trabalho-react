import React from 'react';

import { GoHomeFill } from "react-icons/go"; 
import { FiSearch, FiPlusSquare, FiVideo } from 'react-icons/fi'; 

import { NavWrapper, ProfileIcon } from './styles.js';

function BottomNav({ profilePic, onOpenModal }) {
  return (
    <NavWrapper> 
      <GoHomeFill />    
      <FiSearch />      
      
      <FiPlusSquare onClick={onOpenModal} /> 
      
      <FiVideo />  
      
      <ProfileIcon src={profilePic} alt="Perfil" /> 
    </NavWrapper>
  );
}

export default BottomNav;