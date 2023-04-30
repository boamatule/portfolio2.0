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
} from './Navigation.Styles';

import DarkMode from '../../components/DarkMode/DarkMode';
import Dropdown from '../Dropdown/Dropdown';
import { DropdownMobileIcon } from '../Dropdown/Dropdown.Styles';

const NavBar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const [button, setButton] = useState(true);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click)
  };

  const closeMobileMenu = () => setClick(false);

  // const handleClick = () => {
  //   if (window.innerWidth <= 640) {
  //     setClick(!click);
  //   }
  // };

  const onMouseEnter = () => {
    if (window.innerWidth <= 640) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth <= 640) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };


  const showButton = () => {
    if (window.innerWidth <= 640) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const changeNav = () => {
    if (window.scrollY <= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    showButton();
    changeNav();
    // onMouseEnter();
    // onMouseLeave();
    // handleClick();
  }, []);
  
  window.addEventListener('resize', showButton);

  const [theme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <IconContext.Provider value={{ color: 'grey' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer >
            <DropdownMobileIcon
              onClick={handleClick}
              // onMouseLeave={onMouseLeave}
              onMouseEnter={onMouseEnter}
            // showButton={showButton}

            >
              {click ? (
                <AnimatedFaTimes />
              ) : (
                <AnimatedFaBars />
              )}
              {/* {click ? (
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
                  style={{
                    width: '24px',
                    height: '24px',
                    color: '#6969FB',
                    background: 'none',
                  }}
                />
              )} */}

            </DropdownMobileIcon>
            <NavbarContainer>
              {click ? (
                <Dropdown
                  handleClick={handleClick}
                // onMouseEnter={onMouseEnter}
                // onMouseLeave={onMouseLeave}
                // dropdown={dropdown}
                />
              ) : (
                <NavMenu
                  // onClick={handleClick}
                  // click={click}
                  // onMouseLeave={onMouseLeave}
                >
                  <NavItem>
                    <NavLinks to="/"
                      // onClick={closeMobileMenu}
                    >
                      home
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      to="projects"
                      // onClick={closeMobileMenu}
                    >
                      portfolio
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      to="about_me"
                      // onClick={closeMobileMenu}
                    >
                      about
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      to="contact_me"
                      // onClick={closeMobileMenu}
                    >
                      contact
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      to="my_skills_set"
                      // onClick={closeMobileMenu}
                    >
                      Skills
                    </NavLinks>
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
              <DarkMode
                style={{

                }}

              />
              <NavItemSocialIconLinkMotion
                whileHover={{ scale: 1.1, transition: { duration: 0 } }}
              >

                <NavItemSocialIconLink>
                </NavItemSocialIconLink>
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
            </NavItemSocialIconWrapper>
          </NavbarContainer>
        </Nav>
        <Outlet />
      </IconContext.Provider>
    </ThemeProvider >
  );
};

export default React.memo(NavBar);



