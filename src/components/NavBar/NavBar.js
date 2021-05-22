// import React from 'react';
// import { FaGithub, FaLinkedinIn, FaBars } from 'react-icons/fa';
// import {
//   Nav,
//   NavbarContainer,
//   NavLogo,
//   MobilIcon,
//   NavLinks,
//   NavItem,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
//   SocialIcons,
//   SocialIconLink,
// } from './NavBarStyles';

// const NavBar = () => (
//   <>
//     <Nav>
//       <NavbarContainer>
//         <NavLogo to="/about">Boa Matule</NavLogo>
//         <MobilIcon
//         // onClick={toggle}
//         >
//           <FaBars />
//         </MobilIcon>
//         <NavMenu>
//           <NavItem>
//             <NavLinks to="/about">about</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks to="/portfolio-list">portfolio</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks to="/resume">resume</NavLinks>
//           </NavItem>
//           <NavItem>
//             <NavLinks to="/contact">contact</NavLinks>
//           </NavItem>
//         </NavMenu>

//         <SocialIcons>
//           <SocialIconLink
//             href="https://www.linkedin.com/in/boaventura-matule-2082b068/"
//             target="_blank"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedinIn />
//           </SocialIconLink>
//           <SocialIconLink href="https://github.com/boamatule" target="_blank" aria-label="LinkedIn">
//             <FaGithub />
//           </SocialIconLink>
//         </SocialIcons>
//       </NavbarContainer>
//     </Nav>
//   </>
// );

// export default NavBar;
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../global-styles';

// eslint-disable-next-line import/named
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavItemBtn,
  NavBtnLink,
} from './NavBarStyles';

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

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Boa Matule
            </NavLogo>
            <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">HOME</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">ABOUT</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/portfolio-list">PORTFOLIO</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">CONTACT</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/resume">RESUME</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">portfolio</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>Sign up</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button
                      // onClick={closeMobileMenu}
                      fonBig
                      primary
                    >
                      Sign up
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
