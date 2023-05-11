import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../components/DarkMode/Themes';
import useDarkMode from '../../components/DarkMode/useDarkMode';

import {
  AnimatedFaBars,
  AnimatedFaTimes,
  Nav,
  NavItem,
  NavItemSocialIconLink,
  NavItemSocialIconLinkMotion,
  NavItemSocialIconWrapper,
  NavLinks,
  NavMenu,
  NavbarContainer,
  LogoContainer,
  StyledLogo,
} from './Navigation.Styles';

import DarkMode from '../../components/DarkMode/DarkMode';
import Dropdown from '../Dropdown/Dropdown';
import { DropdownMobileIcon } from '../Dropdown/Dropdown.Styles';

const NavBar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const changeNav = () => {
    if (window.scrollY <= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    changeNav();
  }, []);

  const [theme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <IconContext.Provider value={{ color: 'grey' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer >
            <LogoContainer to="/"> 
              <StyledLogo
                src="../../../images/logo.png"
                alt='logo'
                loading="lazy"
                />
            </LogoContainer>
            <DropdownMobileIcon onClick={handleClick}>
              {click ? (
                <AnimatedFaTimes
                  style={{
                    color: '#4568dc'
                  }}
                />
              ) : (
                <AnimatedFaBars
                  style={{
                    color: '#4568dc'
                  }}
                />
              )}
            </DropdownMobileIcon>

            {click ? (
              <Dropdown />
            ) : (
              <NavMenu onClick={closeMobileMenu}>
                <NavItem>
                  <NavLinks to="/">home</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="projects">portfolio</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="about_me">about</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="contact_me">contact</NavLinks>
                </NavItem>
              </NavMenu>
            )}
            <NavItemSocialIconWrapper
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.5,
              }}
            >
              <DarkMode />
              <NavItemSocialIconLinkMotion
                // whileHover={{ scale: 1.1, transition: { duration: 0 } }}
              >
                <NavItemSocialIconLink
                  href="https://www.linkedin.com/in/boa-matule-2082b068/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn
                    style={{
                      width: '18px',
                      height: '18px'
                    }}
                  />
                </NavItemSocialIconLink>
                <NavItemSocialIconLink
                  href="https://github.com/boamatule"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub
                    style={{
                      width: '18px',
                      height: '18px',
                      marginLeft: '0px'
                    }}
                  />
                </NavItemSocialIconLink>
              </NavItemSocialIconLinkMotion>
            </NavItemSocialIconWrapper>
          </NavbarContainer>
        </Nav>
        <Outlet />
      </IconContext.Provider>
    </ThemeProvider >
  );
};

export default React.memo(NavBar);



