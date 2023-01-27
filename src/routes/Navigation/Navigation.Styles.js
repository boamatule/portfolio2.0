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
/* 
  @media screen and (min-width: 600px) {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px
  }

  @media screen and (max-width:768px) {
    max-width: 100%;
    padding-right: 4px;
    padding-left: 4px
  } */

  @media screen and (min-width: 769px) and (max-width:1024px) {
    /* max-width: 1200px; */
  }
  @media screen and (min-width: 1025px) {
    /* max-width: 1400px; */
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  /* max-width: 1500px; */

  /* @media (max-width: 767px) {
    height: 60px;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    align-items: flex-start;
  }
  @media (min-width: 1200px) {
    height: 100px;
  } */
  @media screen and (min-width: 600px) {
    max-width: 100%;
    /* margin-right: auto;
    margin-left: auto; */
    padding-right: 4px;
    padding-left: 4px
  }

  @media screen and (max-width:768px) {
    padding-right: 4px;
    padding-left: 4px
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    /* max-width: 1200px; */
  }
  @media screen and (min-width: 1025px) {
    /* max-width: 1400px; */
  }
`;


export const LogoContainer = styled(Link)`
  justify-self: start;
  margin-left: -140px;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: 200px;
  position: flex;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    justify-self: start;
    margin-left: 100px;
    text-decoration: none;
    display: flex;
    /* align-items: center; */
    margin-top: 200px;
    position: flex;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    text-align: start;
    /* margin-bottom: 1rem; */
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
  text-align: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 80px;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    display: flex;
  height: 80px;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 80px;
  cursor: pointer;
  }

  @media screen and (max-width:768px) {
    /* max-width: 100%; */
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    /* max-width: 1200px; */
  }
  @media screen and (min-width: 1025px) {
    /* max-width: 1400px; */
  }
`;

export const NavItem = styled.li`
  margin-top: 80px;
  @media screen and (min-width: 600px) {
    margin-top: 80px;

  }

  @media screen and (max-width:768px) {
    margin-top: 80px;

  }
`;

export const NavItemBtn = styled.li`
  font-family: 'Montserrat', sans-serif;

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

export const NavLinks = styled(Link)`
  display: flex;
  font-size: 16px;
  color: grey;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  letter-spacing: 4px;
  text-decoration: none;
  align-items: center;
  padding: 10px 40px;

  &:hover {
    color: yellow;
    transition: all 0.2s ease-out;
  }

  @media screen and (min-width: 600px) {
    font-size: 14px;
    padding: 10px 20px;
    letter-spacing: 4px;
  }

  @media screen and (max-width:768px) {
    font-size: 14px;
    padding: 10px 20px;
    letter-spacing: 4px;
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    /* max-width: 1200px; */
  }
  @media screen and (min-width: 1025px) {
    /* max-width: 1400px; */
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

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItemToggle = styled(motion.div)`
  height: 80px;
  display: flex;
  padding: 30px;
`;



