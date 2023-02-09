import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../../global-styles';

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
  list-style: none;
  margin-top: 100px;
  margin-bottom: 160px;
  text-transform: uppercase;
  font-family: 'IBM Plex Mono', monospace;

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
  text-decoration: none;
  padding: 0rem 8rem;
  height: 100%;
  font-size: 16px;
  color: grey;
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: 4px;
  line-height: 20px;
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




