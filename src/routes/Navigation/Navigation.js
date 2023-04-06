import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { FaBars, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../components/DarkMode/Themes';
import useDarkMode from '../../components/DarkMode/useDarkMode';

import {
  MobileIcon,
  Nav,
  NavItem,
  NavItemSocialIconLink,
  NavItemSocialIconLinkMotion,
  NavItemSocialIconWrapper,
  NavLinks,
  NavMenu,
  NavbarContainer,
  LogoContainer,
  Image,
} from './Navigation.Styles';

import DarkMode from '../../components/DarkMode/DarkMode';

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY <= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

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


  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovering(false);
  // };

  return (
    <ThemeProvider theme={themeMode}>
      <IconContext.Provider value={{ color: 'grey' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>
              <FaBars
                style={{
                  color: '#4568dc'
                }}
              />
            </MobileIcon>
            {/* <LogoContainer to="/">
              <Image  src="../../images/avatar.webp" alt="Boa"  />
            </LogoContainer> */}
            <NavMenu>
              <NavItem>
                <NavLinks
                  to=""
                >
                  home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projects"
                >
                  portfolio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about_me"
                >
                  about
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contact_me"
                >
                  contact
                </NavLinks>
              </NavItem>
            </NavMenu>


            <NavItemSocialIconWrapper
              initial={{
                x: -500,
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

