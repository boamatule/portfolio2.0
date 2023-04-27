import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  DropdownContainer,
  DropdownItem,
  DropdownLink,
  DropdownMenu,
  DropdownMobileIcon,
  AnimatedFaTimes,
  AnimatedFaBars 
} from "./Dropdown.Styles";


const Dropdown = ({ click,setClick, handleClick }) => {
  
  return (
    <DropdownContainer >
      <DropdownMenu> what do you do you are you are you a boy or a mum they contact Rikka La La La Lala oh lovely card who is 
        <DropdownItem 
          onClick={handleClick}
          >
          <DropdownLink 
            to="/" 
              onClick={() => setClick(false)}
            > 
            My Homepage
          </DropdownLink>
          <DropdownLink 
            to="/projects" 
              onClick={() => setClick(false)}
            >
            My Portfolio
          </DropdownLink>
          <DropdownLink
            to="/about_me"
              onClick={() => setClick(false)}
            >
            About Me
          </DropdownLink>
          <DropdownLink 
            to="/contact_me" 
            onClick={() => setClick(false)}
            >
            Get In Touch
          </DropdownLink>
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;