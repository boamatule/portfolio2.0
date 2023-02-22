/* eslint-disable react/function-component-definition */
import React, { useState, useEffect, Profiler } from 'react';
import { Outlet } from 'react-router-dom';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { FaBars, FaTimes } from 'react-icons/fa';

import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../../components/DarkMode/Themes';
import useDarkMode from '../../components/DarkMode/useDarkMode';

import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavLinks,
  NavItem,
  NavItemSocialIconLink,
  LogoContainer,
  NavItemSocialIconWrapper,
  NavItemSocialIconLinkMotion,
  ToggleSwitch,
  NavItemSocialWrapper,
  MobileIcon,
  Bars
} from './Navigation.Styles';

import {
  Avatar,
  ProfileWrapper,
  Img,
  Heading,
  Subtitle,
  ProfileWrapperContainer
} from '../../components/Profile/ProfileStyles';
import DarkMode from '../../components/DarkMode/DarkMode';
import SideBar from '../../components/SideBar/SideBar';


const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  // {click ? (
  //   <FaTimes
  //     style={{
  //       width: '25px',
  //       height: '25px',
  //       color: 'purple',
  //     }}
  //   />
  // ) : (
  //   <FaBars
  //     style={{
  //       width: '25px',
  //       height: '25px',
  //       color: 'purple',
  //     }}
  //   />
  // )}

  
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

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  }

  return (
    <ThemeProvider theme={themeMode}>
      <IconContext.Provider value={{ color: 'grey' }}>
        <Nav>
          <NavbarContainer>
          <MobileIcon onClick={handleClick}>
            {click ? (
              <FaTimes
                style={{
                  width: '25px',
                  height: '25px',
                  color: 'purple',
                }}
              />
            ) : (
              <FaBars
                style={{
                  width: '25px',
                  height: '25px',
                  color: 'purple',
                }}
              />
            )}
          </MobileIcon>
            {/* <LogoContainer to="/" aria-current="homepage">
              <Img src="../../images/avatar.webp" alt="Boa" />
            </LogoContainer> */}

            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/curated_projects">portfolio</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about_me">about</NavLinks>
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
                  whileHover={{ scale: 1.1, transition: { duration: 0 } }}
                  >
                  <NavItemSocialIconLink
                    href="https://www.linkedin.com/in/boa-matule-2082b068/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn 
                      style={{ 
                        width: '20px', 
                        height: '20px' 
                      }} 
                    />
                  </NavItemSocialIconLink>
                </NavItemSocialIconLinkMotion>

                <NavItemSocialIconLinkMotion
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0 },
                  }}
                  >
                  <NavItemSocialIconLink
                    href="https://github.com/boamatule"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub 
                      style={{ 
                        width: '20px', 
                        height: '20px' 
                      }} 
                    />
                  </NavItemSocialIconLink>
                </NavItemSocialIconLinkMotion>
                <DarkMode />
              {/* <Bars /> */}
              <SideBar />
            </NavItemSocialIconWrapper>
            {/* <MobileIcon /> */}
          </NavbarContainer>
        </Nav>
        <Outlet />
      </IconContext.Provider>
    </ThemeProvider >
  );
};

export default NavBar;

