/* eslint-disable react/function-component-definition */
import React, { useState, useEffect, Profiler } from 'react';
import { Outlet } from 'react-router-dom';

import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../../components/DarkMode/Themes';
import useDarkMode from '../../components/DarkMode/useDarkMode';
import Toggle from '../../components/DarkMode/Toggler';

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
  LogoContainer,
} from './Navigation.Styles';

import {
  Avatar, 
  ProfileWrapper, 
  Img, 
  Heading, 
  Subtitle, 
  ProfileWrapperContainer
} from '../../components/Profile/ProfileStyles';


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

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <IconContext.Provider value={{ color: 'grey' }}>
        <Nav>
          <NavbarContainer>
            {/* <MobileIcon onClick={handleClick}>
              {click ? (
                <FaTimes
                  style={{
                    width: '24px',
                    height: '24px',
                    color: '#6969FB',
                    background: 'none',
                  }}
                />
              ) : (
                <FaBars
                  size={34}
                  style={{
                    width: '24px',
                    height: '24px',
                    color: '#6969FB',
                    background: 'none',
                  }}
                />
              )}
            </MobileIcon> */}
            <LogoContainer to="/" aria-current="homepage">
                <Img src="../../images/avatar.webp" alt="Boa" />
            </LogoContainer>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/curated_projects">PORTFOLIO</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact_me">CONTACT</NavLinks>
              </NavItem>

              <NavItemSocialIcon>
                <NavItemSocialIconLink
                  href="https://github.com/boamatule"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub style={{ width: '24px', height: '24px' }} />
                </NavItemSocialIconLink>
              </NavItemSocialIcon>

              <NavItemSocialIcon>
                <NavItemSocialIconLink
                  href="https://www.linkedin.com/in/boa-matule-2082b068/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn style={{ width: '24px', height: '24px' }} />
                </NavItemSocialIconLink>
              </NavItemSocialIcon>
              <NavItem>
                <NavItemToggle whileHover={{ scale: 1, rotate: 0 }}>
                  <Toggle theme={theme} toggleTheme={themeToggler} />
                </NavItemToggle>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
        <Outlet />
      </IconContext.Provider>
    </ThemeProvider >
  );
};

export default NavBar;
