import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../components/DarkMode/Themes';
import useDarkMode from '../../components/DarkMode/useDarkMode';

import {
  FaBarsIcon,
  MobileIconContainer,
  Nav,
  NavItem,
  NavItemSocialIconLink,
  NavItemSocialIconLinkMotion,
  NavItemSocialIconWrapper,
  NavLinks,
  NavMenu,
  NavbarContainer
} from './Navigation.Styles';

import DarkMode from '../../components/DarkMode/DarkMode';
import Dropdown from '../Dropdown/Dropdown';

const NavBar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const changeNav = () => {
    if (window.scrollY <= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggle = () => {
    console.log("Toggle love");
    if (window.innerWidth <= 960) {
      setIsOpen(!isOpen); // Update isOpen to its opposite value
    } else {
      setIsOpen(false);
    }
  };

  const handleItemClick = () => {
    setIsOpen(false); // Update isOpen to false when any dropdown item is clicked
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      console.log("What's up?");
      toggle();
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("handleKeyDown called");
      toggle();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const [theme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <IconContext.Provider value={{ color: 'grey' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer >
            <NavbarContainer>
              <MobileIconContainer
                onClick={toggle}
                onKeyPress={handleKeyPress}
                handleKeyDown={handleKeyDown}
                tabIndex={0}
              >
                {isOpen ? (
                  <FaTimes
                    style={{
                      width: '26px',
                      height: '26px',
                      color: ' #4568dc',
                      background: 'none',
                    }}
                  />
                ) : (
                  <FaBarsIcon
                    style={{
                      width: '26px',
                      height: '26px',
                      color: ' #4568dc',
                      background: 'none',
                    }}
                  />
                )}
              </MobileIconContainer>
              {isOpen && (
                <Dropdown isOpen={isOpen} onClick={toggle} onItemClick={handleItemClick} />
              )}
              {!isOpen && (
                <NavMenu>
                  <NavItem>
                    <NavLinks to="">home</NavLinks>
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
                  <NavItem>
                    <NavLinks to="my_skills_set">Skills</NavLinks>
                  </NavItem>
                </NavMenu>
              )}
            </NavbarContainer>


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
        </Nav>
        <Outlet />
      </IconContext.Provider>
    </ThemeProvider >
  );
};

export default React.memo(NavBar);



