import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { Link as smoothScroll } from 'react-scroll';
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  margin-bottom: 200px;
  justify-content: space-between;
  top: 0;
  width:100%;
  font-size: 1rem;
  z-index: 999;
  background: transparent;
  padding: 2rem 6rem;


  @media screen and (max-width:  1050px) {
  padding: 2rem 4rem;
  }

  @media screen and (max-width:  700px) {
  padding: 2rem 4rem;
  }

  @media screen and (max-width:  300px) {
  padding: 2em;
  }

`,


NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
width: 100%;
@media screen and (max-width: 700px) {

}
`,

FaBarsIcon = styled(FaBars)`
    display: none;
  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.8rem;
    background: transparent;
  }
`,

  LogoContainer = styled(Link)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  margin-left: -80px;
  z-index: 999;
  text-decoration: none;
  

  @media screen and (max-width: 700px) {
    margin-left: -102px;
  }
`,
  StyledLogo = styled.img`
  width: 260px;
  height: 260px;
  @media screen and (max-width: 700px) {
    width: 200px;
    height: 200px;
  } 
`,
  NavMenu = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  list-style: none;
  text-transform: uppercase;
  justify-self: flex-start;

  @media screen and (max-width: 700px) {
    display: none;
    left: ${({ click }) => (click ? 0 : '-100%')};
  }
`, NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    margin-top: -0.5rem;
    border-bottom: 4px solid #4568dc;
    padding-bottom: 0;
  }
`, NavLinks = styled(smoothScroll)`
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
  color: #8e9188;
  letter-spacing: 8px;
  /* line-height: 28px; */
  font-family: 'Roboto Mono', monospace;
  /* font-weight: 400; */
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #4568dc;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 0.5rem;
    margin: 0.5rem 0;

    &:hover {
      transition: 0.3s ease-out;
    }
  }
`,
  NavItemSocialIconWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap-reverse;
  position: relative;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-right: 0px;
    align-items: center;
    justify-content: space-between;  
    flex-direction: row;
    top: 0;
    & {
      initial: {
        x: -500,
        opacity: 0,
        scale: 0.9,
      }
    }
  }
`,
  NavItemSocialIconLinkMotion = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  cursor: pointer;
  @media screen and (max-width: 700px) {
  }
`,

NavItemSocialIconLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
margin: 0.5rem 1rem;
background-color: transparent;
border-radius: 50%;
transition: background-color 0.3s ease-in-out;
&:hover {
  background-color:  #4568dc;
}

@media screen and (max-width: 700px) {
  /* margin-left: -4rem; */
}

/* increase touch target size */
width: 36px;
height: 36px;
padding-left: 0rem;
margin-right: 0em;

/* remove unnecessary styles */
top: auto;
justify-content: center;
`,


  NavItemSocialIconLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0rem;
    background-color: #fff;
  }
`,


  DarkModeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color:  #4568dc;
  }

  @media screen and (max-width: 700px) {
    /* margin-left: -4rem; */
  }

  /* increase touch target size */
  width: 36px;
  height: 36px;
  padding-left: 0rem;
  margin-right: 0em;

  /* remove unnecessary styles */
  top: auto;
  justify-content: center;
`,

  Image = styled(LazyLoadImage)`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  margin-right: 0.5rem;
`,
  DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`, DropdownMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0.5rem 1rem;
  font-size: 16px;
  color: grey;
  text-decoration: none;

  &:hover {
    background-color: #f8f8f8;
  }
`,

  AnimatedFaTimes = styled(FaTimes)`
width: 24px;
height: 24px;
color: #6969FB;
background: none;
transition: transform 0.3s ease-in-out; 
cursor: pointer;
&:hover {
  transform: rotate(90deg); 
}
`,

AnimatedFaBars = styled(FaBars)`
width: 24px;
height: 24px;
color: #6969FB;
background: none;
transition: transform 0.3s ease-in-out; 
cursor: pointer;
&:hover {
  transform: scale(1.2); 
}
`

export const NavItemToggle = styled(motion.div)`
  height: 80px;
  display: flex;
  padding: 30px;
  &:hover {
    color: none;
  }

  @media screen and (max-width: 700px) {
    height: 80px;
    padding: 30px;
    background-color: none;

    &:hover {
      transition: none;
    }
  }
`;
export { AnimatedFaBars, AnimatedFaTimes, DarkModeWrapper, DropdownMenu, DropdownMenuItem, FaBarsIcon, Image, LogoContainer, Nav, NavItem, NavItemSocialIconLink, NavItemSocialIconLinkMotion, NavItemSocialIconLinkWrapper, NavItemSocialIconWrapper, NavLinks, NavMenu, NavbarContainer, StyledLogo };

