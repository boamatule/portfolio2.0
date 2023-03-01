import React, { useState, useEffect } from 'react';
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
} from './Navigation.Styles';

import {
  Avatar,
  ProfileWrapper,
  Img,
  Heading,
  Subtitle,
  ProfileWrapperContainer
} from '../../components/Profile/Profile.Styles';
import DarkMode from '../../components/DarkMode/DarkMode';

const NavBar = ({ toggle }) => {
  // const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => setClick(!click);

  // const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setShowDropdown(false);
  //   } else {
  //     setShowDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setShowDropdown(false);
  //   } else {
  //     setShowDropdown(false);
  //   }
  // };

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
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <IconContext.Provider value={{ color: 'grey' }}>
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars 
                style={{
                  color: '#4568dc'
                }}
                />
            </MobileIcon>
            {/* <LogoContainer to="/" aria-current="homepage">
              <Img src="../../images/logo_boa.PNG" alt="Boa" />
            </LogoContainer> */}
            {/* onClick={handleClick} click={click} */}
            <NavMenu>
              <NavItem>
                <NavLinks to="/">home</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/curated_projects" >portfolio</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to="/about_me" >about</NavLinks>
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
            </NavItemSocialIconWrapper>
          </NavbarContainer>
        </Nav>
        <Outlet />
      </IconContext.Provider>
    </ThemeProvider >
  );
};

export default NavBar;

