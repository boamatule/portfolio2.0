/* eslint-disable import/no-named-as-default */
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { Button } from '../../global-styles';
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
            <NavLogo to="/">{/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}</NavLogo>
            <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" text={{ color: '#EEE142' }}>
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
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default NavBar;
