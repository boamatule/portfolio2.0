import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Button } from '../../global-styles';
import { lightTheme, darkTheme } from '../DarkMode/Themes';
import useDarkMode from '../DarkMode/useDarkMode';
import Toggle from '../DarkMode/Toggler';

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
  Img,
  NavItemSeparator,
} from './NavBarStyles';

function NavBar() {
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

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <IconContext.Provider value={{ color: '#EEE142' }}>
        <GlobalStyles />
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
            <NavLogo>
              <Img src="../../images/logo.svg" alt="logo" />
            </NavLogo>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/home" text={{ color: '#EEE142' }}>
                  01 : HOME
                </NavLinks>
              </NavItem>
              |
              <NavItem>
                <NavLinks to="/about">02 : ABOUT</NavLinks>
              </NavItem>
              |
              <NavItem>
                <NavLinks to="/portfolio-list">03 : PORTFOLIO</NavLinks>
              </NavItem>
              |
              <NavItem>
                <NavLinks to="/contact">04 : CONTACT</NavLinks>
              </NavItem>
              |
              <NavItem>
                <NavLinks href="https://github.com/boamatule" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaGithub />
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="https://github.com/boamatule" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </NavLinks>
              </NavItem>
              <NavItem>
                <Toggle theme={theme} toggleTheme={themeToggler} />
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default NavBar;
