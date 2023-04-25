import React from 'react';
import { ErrorContainer, TextRaw } from './NotFound.Style';

const NotFound = () => {
  return (
    <ErrorContainer>
      <TextRaw>404: Page Not Found ;-( The page you are looking for doesn't exist or has been moved.</TextRaw>
    </ErrorContainer>
  );
}

export default React.memo(NotFound);



// import { useState, useEffect } from 'react';
// import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
// import { ThemeProvider } from 'styled-components';
// import { GlobalStyles } from '../../global-styles';
// import { lightTheme, darkTheme } from '../DarkMode/Themes';
// import useDarkMode from '../DarkMode/useDarkMode';
// import Toggle from '../DarkMode/Toggler';
// import {
//   Nav,
//   NavbarContainer,
//   MobileIcon,
//   NavMenu,
//   NavLinks,
//   NavItem,
//   NavItemSocialIconLink,
//   NavItemSocialIcon,
//   NavItemToggle,
// } from './NavBarStyles';

// const NavBar = () => {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   const [theme, themeToggler] = useDarkMode();
//   const themeMode = theme === 'light' ? lightTheme : darkTheme;

//   return (
//     <ThemeProvider theme={themeMode}>
//       <IconContext.Provider value={{ color: 'grey' }}>
//         <GlobalStyles />
//         <Nav>
//           <NavbarContainer>
//             <MobileIcon onClick={handleClick}>
//               {click ? (
//                 <FaTimes
//                   style={{
//                     width: '24px',
//                     height: '24px',
//                     color: '#6969FB',
//                     background: 'none',
//                   }}
//                 />
//               ) : (
//                 <FaBars
//                   style={{
//                     width: '24px',
//                     height: '24px',
//                     color: '#6969FB',
//                     background: 'none',
//                   }}
//                 />
//               )}
//             </MobileIcon>
//             <NavMenu>
//               <NavItem>
//                 <NavLinks to="/home">HOME</NavLinks>
//               </NavItem>
//               <NavItem>
//                 <NavLinks to="/about">ABOUT</NavLinks>
//               </NavItem>
//               <NavItem>
//                 <NavLinks to="/portfolio-list">PORTFOLIO</NavLinks>
//               </NavItem>
//               <NavItem>
//                 <NavLinks to="/contact">CONTACT</NavLinks>
//               </NavItem>
//               <NavItemSocialIcon>
//                 <NavItemSocialIconLink
//                   href="https://github.com/boamatule"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="GitHub"
//                 >
//                   <FaGithub style={{ width: '24px', height: '24px' }} />
//                 </NavItemSocialIconLink>
//               </NavItemSocialIcon>
//               <NavItemSocialIcon>
//                 <NavItemSocialIconLink
//                   href="https://www.linkedin.com/in/boa-matule-2082b068/"
//                   target="_blank"
//                   rel="noreferrer"
//                   aria-label="LinkedIn"
//                 >
//                   <FaLinkedinIn style={{ width: '24px', height: '24px' }} />
//                 </NavItemSocialIconLink>
//               </NavItemSocialIcon>
//               <NavItemToggle whileHover={{ scale: 1.2, rotate: 0 }}>
//                 <Toggle theme={theme} toggleTheme={themeToggler} />
//               </NavItemToggle>
//             </NavMenu>
//           </NavbarContainer>
//         </Nav>
//       </IconContext.Provider>
//     </ThemeProvider>
//   );
// };

// export default NavBar;