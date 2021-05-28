import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { lightTheme, darkTheme } from '../DarkMode/Themes';
import Toggle from '../DarkMode/Toggler';
import useDarkMode from '../DarkMode/useDarkMode';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavItemBtn,
  NavBtnLink,
  NavLinkedIn,
  NavGithub,
} from './NavBarStyles';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <NavbarContainer>
          {/* <NavLogo to="/">
              <NavIcon />
              Boa Matule
            </NavLogo> */}
          <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" text={{ color: 'purple' }}>
                HOME
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/portfolio-list">PORTFOLIO</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">CONTACT</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default NavBar;
