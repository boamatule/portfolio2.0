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
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  Img,
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
                <FaTimes style={{ width: '25px', height: '25px', color: 'red' }} />
              ) : (
                <FaBars style={{ width: '25px', height: '25px', color: '#4568dc' }} />
              )}
            </MobileIcon>
            <NavLogo to="/home">
              {/* <NavLinks to="/home" text={{ color: '#EEE142' }}> */}
              <Img src="../../images/logo.svg" alt="logo" />
              {/* </NavLinks> */}
            </NavLogo>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/home" text={{ color: '#EEE142' }}>
                  01 : HOME
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/about">02 : ABOUT</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/portfolio-list">03 : PORTFOLIO</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/contact">04 : CONTACT</NavLinks>
              </NavItem>

              <NavItemSocialIcon>
                <NavItemSocialIconLink
                  href="https://github.com/boamatule"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub style={{ width: '25px', height: '25px' }} />
                </NavItemSocialIconLink>
              </NavItemSocialIcon>
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
              {/* <NavItem>
                <NavItemToggle>
                  <Toggle theme={theme} toggleTheme={themeToggler} />
                </NavItemToggle>
              </NavItem> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </ThemeProvider>
  );
}

export default NavBar;
