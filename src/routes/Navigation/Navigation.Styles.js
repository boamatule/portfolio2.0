import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../../global-styles';
import Toggle from '../../components/DarkMode/Toggler';

export const Nav = styled(motion.div)`
  background: transparent;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
  
  @media screen and (max-width: 960px) {
    width: 100%;
    top: 0px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin-bottom: 0px;
  z-index: 1;

  @media (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px;
    width: 100%;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  margin: 40px 0 60px 0;
  cursor: pointer;
  position: absolute;

  @media (max-width: 960px) {
    position: flex;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const NavMenu = styled.ul`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  outline: none;
  margin-top: 100px;
  margin-bottom: 160px;
  text-transform: uppercase;
  /* font-family: 'IBM Plex Mono', monospace;
  font-style: normal;
  font-weight: bold; */

  @media (max-width: 960px) {
    margin-top: 80px;
    align-items: center;
    text-align: center;
  
  }
`;

export const NavItem = styled.li`
  display: flex;
  margin-top: 80px;
  height: 80px;

  @media (max-width: 960px) {
  }
`;

export const NavLinks = styled(Link)`
  background: transparent;
  display: flex;
  /* text-decoration: none; */
  padding: 0rem 8rem;
  height: 100%;
  color: grey;
  letter-spacing: 2px;
  font-size: 18px;
  line-height: 20px;
  font-family: 'IBM Plex Mono', monospace;
  font-style: normal;
  font-weight: bold;

  @media (max-width: 960px) {
    font-size: 14px;
    padding: 1rem 0.8rem;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
  }
`;

export const NavItemSocialIconWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background:center;
  flex-wrap: wrap-reverse;
  position: sticky; 
  top: 0;
  margin: 0px 0px;


  @media screen and (max-width: 960px) {
    top: 0;
    flex-wrap: nowrap;
  }
`;

export const NavItemSocialIconLinkMotion = styled(motion.div)`
`;

export const NavItemSocialIconLink = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0rem 1rem;
  transition: all 0.5s ease-out;
  cursor: pointer;
  top: 0;
  height: 100px;


  @media screen and (max-width: 960px) {
    padding: 0rem 0.4rem;
    top: 0;
  }
`;

export const NavItemToggle = styled.div`
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0rem 1rem;
  transition: all 0.5s ease-out;
  cursor: pointer;
  background: transparent;
  top: 0;
  height: 100px;
  
  @media screen and (max-width: 960px) {
    padding: 0rem 1rem;
    top: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: none;
    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(-100%, 60%);
    cursor: pointer;
    background: none;
    color: #4568dc;
  }
`;



export const ToggleSwitchCheckBoxWrapper = styled.div`
  position: relative;
`;
export const ToggleSwitchCheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  /* background: white; */

  cursor: pointer;
  &::after {
    /* content: ""; */
    content: ${Toggle};
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const ToggleSwitchCheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  /* top: 60; */

  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${ToggleSwitchCheckBoxLabel} {
    /* background: #4fbe79; */
    background: red;
    /* top: 120; */
    &::after {
      content: "";
      /* content: ${Toggle}; */

      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;