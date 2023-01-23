import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../../global-styles';

export const Nav = styled(motion.div)`
  background: transparent;
  width: 100%;
  align-items: center;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: none;
    top: 0px;
    align-items: center;
    justify-content: center;
    background: transparent;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  max-width: 1500px;
`;


export const LogoContainer = styled(Link)`
	color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: 160px;

	@media screen and (max-width: 800px) {

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

export const NavMenu = styled.ul`
  box-sizing: border-box;
  display: flex;
  height: 80px;
  align-items: center;
  list-style: none;
  text-align: center;
  letter-spacing: 2px;
  text-decoration: none;
  margin-top: 100px;
  cursor: pointer;

  /* padding: 0px 100px; */


  @media screen and (max-width: 800px) {
    width: 100%;
    top: 0px;
    align-items: center;
    list-style: none;
    text-align: center;
    letter-spacing: 0px;
    text-decoration: none;
    font-size: 0rem;
    transition: all 0.5s ease;
  }
`;

export const NavItem = styled.li`
  margin-top: 80px;
  margin-left: 40px;

  @media screen and (max-width: 800px) {
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;


export const NavLinks = styled(Link)`
  display: flex;
  font-size: 16px;
  color: grey;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: bold;
  text-decoration: none;
  align-items: center;
  padding: 10px 40px;
  height: 100%;

  &:hover {
    color: yellow;
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    padding: 4px 0px;
  }
`;

export const NavItemBtn = styled.li`
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
`;

export const NavItemSocialIconLink = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0.5rem 4.2rem;
  transition: all 0.5s ease-out;
  margin-top: 80px;



  @media screen and (max-width: 800px) {
    padding: 2.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 0px;

    &:hover {
      transition: 0.3s ease;
    }
  }
`;

export const NavItemSocialIcon = styled.div`
  &:hover {
    color: yellow;
    /* border-bottom: 4px solid #fff; */
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavItemToggle = styled(motion.div)`
  height: 80px;
  display: flex;
  padding: 30px;

  @media screen and (max-width: 800px) {
    height: 80px;
    padding: 30px;
    background-color: none;
  }
`;
