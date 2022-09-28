import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Nav = styled(motion.div)`
  background: transparent;
  width: 100%;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: none;
    top: 0px;
    position: fixed;
    align-items: center;
    justify-content: center;
    background: transparent;
  }
`;

export const NavbarContainer = styled.div`
  display: fixed;
  justify-content: center;
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
  display: flex;
  height: 80px;
  align-items: center;
  list-style: none;
  text-align: center;
  letter-spacing: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0rem;

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
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 4px solid #4568dc;
  }

  @media screen and (max-width: 800px) {
    width: 25%;
    align-items: center;
    text-align: center;
    justify-content: center;
    &:hover {
      border-bottom: 4px solid #4568dc;
    }
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  font-size: 16px;
  color: grey;
  font-weight: normal;
  text-decoration: none;
  align-items: center;
  padding: 10px 60px;
  height: 100%;

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-weight: normal;
    font-size: 12px;
    text-decoration: none;
    align-items: center;
    justify-content: center;
    padding: 10px 4px;

    &:hover {
      transition: 0.3s ease-out;
    }
  }
`;

export const NavItemBtn = styled.li`
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
  font-weight: normal;
  text-decoration: none;
  align-items: center;
  padding: 0.5rem 4.2rem;
  height: 100%;
  transition: all 0.5s ease;

  &:hover {
    transition: 0.5s ease;
  }

  @media screen and (max-width: 800px) {
    padding: 2.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 0px;

    &:hover {
      transition: 0.3s ease;
      color: red;
    }
  }
`;

export const NavItemSocialIcon = styled.div`
  &:hover {
    transition: all 1.9s ease;
  }

  @media screen and (max-width: 800px) {
    display: none;
    &:hover {
      color: #4568dc;
    }
  }
`;

export const NavItemToggle = styled(motion.div)`
  height: 80px;
  display: flex;
  padding: 30px;
  &:hover {
    color: none;
  }

  @media screen and (max-width: 800px) {
    margin: 4px 0px 0px 380px;
    color: none;
    background-color: none;

    &:hover {
      transition: none;
    }
  }
`;
