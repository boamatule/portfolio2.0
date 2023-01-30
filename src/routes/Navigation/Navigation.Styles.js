import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../../global-styles';

export const Nav = styled(motion.div)`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  top: 0;
  z-index: 999;
  position: sticky;

`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;

  @media screen and (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  justify-self: center;
  display: flex;
  align-items: center;
  margin: 40px 0px 60px 0px;
  cursor: pointer;
  position: absolute;

  @media screen and (max-width: 960px) {
    justify-self: start;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 20px;
  }
`;

export const NavMenu = styled.ul`
  background: transparent;
  display: flex;
  align-items: center;
  list-style: none;
  /* text-align: center; */
  justify-content: flex-end;
  margin: 0 100px;


  @media screen and (max-width: 960px) {
  display: flex;
  list-style: none;
  text-align: center;
  justify-content: flex-end;
  /* margin-left: 20px; */
  }
`;

export const NavItem = styled.li`
  margin-top: 80px;
  height: 80px;


  @media screen and (max-width: 960px) {
    height: 80px;
    margin-top: 100px;
  }
`;

export const NavLinks = styled(Link)`
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-size: 16px;
  color: grey;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  letter-spacing: 4px;


  &:hover {
    color: yellow;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 960px) {
    font-size: 14px;
    padding: 0.4rem 0.9rem;
    letter-spacing: 2px;
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
  cursor: pointer;



  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 2rem;
    margin-top: 92px;
  }
`;

export const NavItemSocialIcon = styled.div`
    &:hover {
    color: yellow;
    transition: all 0.2s ease-out;
  }
`;

export const NavItemToggle = styled(motion.div)`
  height: 80px;
  display: flex;
  padding: 30px;
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

export const NavItemBtn = styled.li`
  /* font-family: 'Montserrat', sans-serif; */

  /* @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width:768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  } */

  @media screen and (min-width: 769px) and (max-width:1024px) {
    /* max-width: 1200px; */
  }
  @media screen and (min-width: 1025px) {
    /* max-width: 1400px; */
  }
  
`;

