import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../global-styles';
import { lightTheme, darkTheme } from '../DarkMode/Themes';
import useDarkMode from '../DarkMode/useDarkMode';
import Toggle from '../DarkMode/Toggler';

import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavItemSocialIconLink,
  NavItemSocialIcon,
  NavItemToggle,
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
      <IconContext.Provider value={{ color: 'grey' }}>
        <GlobalStyles />
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={handleClick}>
              {click ? (
                <FaTimes style={{ width: '25px', height: '25px', color: '4568dc', background: 'transparent' }} />
              ) : (
                <FaBars style={{ width: '25px', height: '25px', color: '#4568dc', background: 'transparent' }} />
              )}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/home" text={{ color: '#EEE142' }}>
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
              <NavItemSocialIconLink
                href="https://github.com/boamatule"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub style={{ width: '25px', height: '25px' }} />
              </NavItemSocialIconLink>
              <NavItemSocialIcon>
                <NavItemSocialIconLink
                  href="https://www.linkedin.com/in/boaventura-matule-2082b068/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn style={{ width: '25px', height: '25px' }} />
                </NavItemSocialIconLink>
              </NavItemSocialIcon>
              <NavItemToggle whileHover={{ scale: 1.1, rotate: 60 }}>
                <Toggle theme={theme} toggleTheme={themeToggler} />
              </NavItemToggle>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default NavBar;
