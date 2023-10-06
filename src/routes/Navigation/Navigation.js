import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Outlet } from 'react-router-dom';
import { Element, animateScroll as scroll } from "react-scroll";

import {
  AnimatedFaBars,
  AnimatedFaTimes,
  LogoContainer,
  Nav,
  NavItem,
  NavItemSocialIconLink,
  NavItemSocialIconLinkMotion,
  NavItemSocialIconWrapper,
  NavLinks,
  NavMenu,
  NavbarContainer,
  StyledLogo
} from './Navigation.Styles';

import DarkModeButton from '../../components/DarkMode/darkModeButton';
import Dropdown from '../Dropdown/Dropdown';
import { DropdownMobileIcon } from '../Dropdown/Dropdown.Styles';


const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <IconContext.Provider value={{ color: 'grey' }}>
      <Nav>
        <NavbarContainer>
          <LogoContainer to="/">
            <StyledLogo
              src="../../../images/logo.png"
              alt='logo'
              loading="lazy"
              title="Just a logo"
              onClick={toggleHome}
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
                <NavLinks
                  href="/"
                  spy={true}
                  smooth={true}
                  offset={-300}
                  duration={500}
                >
                  home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  href="projects"
                  spy={true}
                  smooth={true}
                  offset={600}
                  duration={500}
                >
                  portfolio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  href="about_me"
                  spy={true}
                  smooth={true}
                  offset={-200}
                  duration={500}
                >
                  about
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  href="contact_me"
                  spy={true}
                  smooth={true}
                  offset={11000}
                  duration={500}
                >
                  contact
                </NavLinks>
              </NavItem>
            </NavMenu>
          )}
          <NavItemSocialIconWrapper>
            <NavItemSocialIconLinkMotion>
              <DarkModeButton />
              <NavItemSocialIconLink
                href="https://www.linkedin.com/in/boa-matule-2082b068/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn
                  style={{
                    width: '18px',
                    height: '18px',
                    marginLeft: '0px'
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
                    marginRight: '0px'
                  }}
                />
              </NavItemSocialIconLink>
            </NavItemSocialIconLinkMotion>
          </NavItemSocialIconWrapper>
        </NavbarContainer>
      </Nav>
      <div>
        <Element
          id="/"
        />
        <Element
          id="about_me"
        />
        <Element
          id="projects"
        />
        <Element
          id="contact_me"
        />
      </div>
      <Outlet />
    </IconContext.Provider>
  );
};

export default React.memo(NavBar);



