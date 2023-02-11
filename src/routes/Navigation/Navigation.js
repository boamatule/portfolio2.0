/* eslint-disable react/function-component-definition */
import React, { useState, useEffect, Profiler } from 'react';
import { Outlet } from 'react-router-dom';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../../components/DarkMode/Themes';
import useDarkMode from '../../components/DarkMode/useDarkMode';
import Toggle from '../../components/DarkMode/Toggler';

import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavLinks,
  NavItem,
  NavItemSocialIconLink,
  NavItemToggle,
  LogoContainer,
  NavItemSocialIconWrapper,
  NavItemSocialIconLinkMotion,
  ToggleSwitchCheckBoxWrapper,
  ToggleSwitchCheckBoxLabel,
  ToggleSwitchCheckBox,
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
            <LogoContainer to="/" aria-current="homepage">
              <Img src="../../images/avatar.webp" alt="Boa" />
            </LogoContainer>

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/curated_projects">portfolio</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact_me">contact</NavLinks>
              </NavItem>
            </NavMenu>

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
              <NavItemSocialIconLinkMotion
                whileHover={{ scale: 1.1, transition: { duration: 1.5 } }}
              >
                <NavItemSocialIconLink
                  href="https://www.linkedin.com/in/boa-matule-2082b068/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn style={{ width: '20px', height: '20px' }} />
                </NavItemSocialIconLink>
              </NavItemSocialIconLinkMotion>

              <NavItemSocialIconLinkMotion
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 1.5 }
                }}

              >

                <NavItemSocialIconLink
                  href="https://github.com/boamatule"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub style={{ width: '20px', height: '20px' }} />
                </NavItemSocialIconLink>
              </NavItemSocialIconLinkMotion>

              <NavItemToggle
              // whileHover={{ scale: 1, rotate: 0 }}
              >
                <ToggleSwitchCheckBoxWrapper>
                  <ToggleSwitchCheckBox id="checkbox" name="checkbox" type="checkbox" />
                  <ToggleSwitchCheckBoxLabel htmlFor="checkbox">
                    <Toggle theme={theme} toggleTheme={themeToggler} />
                  </ToggleSwitchCheckBoxLabel>
                </ToggleSwitchCheckBoxWrapper>

              </NavItemToggle>


            </NavItemSocialIconWrapper>
          </NavbarContainer>
        </Nav>
        <Outlet />
      </IconContext.Provider>
    </ThemeProvider >
  );
};

export default NavBar;
