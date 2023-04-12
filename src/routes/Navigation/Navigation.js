import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../components/DarkMode/Themes';
import useDarkMode from '../../components/DarkMode/useDarkMode';

import {
  MobileIconBars,
  MobileIconIconWrapper,
  Nav,
  NavItem,
  NavItemSocialIconLink,
  NavItemSocialIconLinkMotion,
  NavItemSocialIconWrapper,
  NavLinks,
  NavMenu,
  NavbarContainer,
  DropdownCloseIcon,
  
} from './Navigation.Styles';

import DarkMode from '../../components/DarkMode/DarkMode';

const NavBar = ({ toggle, active, isOpen, setIsOpen, closeDropdown }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);



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

  const [theme, themeToggle] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <IconContext.Provider value={{ color: 'grey' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer isOpen={active}>

            <MobileIconIconWrapper
              onClick={toggle}
 
              >
              <MobileIconBars
                style={{
                  // color: '#4568dc '
                }}
              />

            </MobileIconIconWrapper>
            <NavMenu
            >
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
                <NavItemSocialIconLink
                  href="https://github.com/boamatule"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub
                    style={{
                      width: '20px',
                      height: '20px',
                      marginLeft: '4px'
                    }}
                  />
                </NavItemSocialIconLink>
              </NavItemSocialIconLinkMotion>
              <DarkMode />
            </NavItemSocialIconWrapper>
          </NavbarContainer>
          {/* <MobileIconIconWrapper
            onClick={toggle}
          >
            <MobileIconBars
              style={{
                color: '#4568dc '
              }}
            />
          </MobileIconIconWrapper> */}
        </Nav>
        <Outlet />
      </IconContext.Provider>
    </ThemeProvider >
  );
};

export default NavBar;

