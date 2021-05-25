import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { FaGithub, FaLinkedinIn, FaBars, FaTimes, FaMoon, BiSun, FaSun } from 'react-icons/fa';
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
} from './NavBarStyles';

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
    <ThemeProvider theme={themeMode}>
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
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/portfolio-list">Portfolio</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>
              <NavItemBtn>
                {/* {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>Sign up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button
                      // onClick={closeMobileMenu}
                      fonBig
                      primary
                    >
                      Sign up
                    </Button>
                  </NavBtnLink>
                )} */}
              </NavItemBtn>
            </NavMenu>
            {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default NavBar;
