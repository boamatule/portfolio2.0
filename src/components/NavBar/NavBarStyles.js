import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../../global-styles';

export const Nav = styled(motion.div)`
  background: transparent;
  height: 80;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  /* position: sticky; */
  position: none;
  top: 0;
  z-index: 999;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  height: 80px;
  justify-content: center;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  padding: 12px 0px 0px 0px;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: none;
    padding: 10px 10px 10px 10px;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    /* background: transparent; */
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
  }}
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 4px solid #4568dc;
  }
  @media screen and (max-width: 960px) {
    width: 30%;
    &:hover {
      border-bottom: 4px solid #4568dc;
    }
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  font-size: 16px;
  color: grey;
  font-weight: bold;
  text-decoration: none;
  align-items: center;
  padding: 0.5rem 4.2rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    padding: 2rem;
    display: table;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    align-items: center;
    justify-self: center;
    bottom: 40px;

    &:hover {
      transition: 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
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

  &:hover {
    transition: 0.5s ease;
    color: #01bf71;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    padding: 2rem;
    display: none;
    font-size: 14px;

    &:hover {
      transition: 0.3s ease;
      color: #01bf71;
    }
  }
`;

export const NavItemSocialIcon = styled.div`
  border-bottom: 2px solid transparent;

  &:hover {
    transition: 0.3s ease;
    color: #01bf71;
  }

  @media screen and (max-width: 960px) {
    display: hidden;
    &:hover {
      color: #4568dc;
    }
  }
`;

export const NavItemToggle = styled(motion.div)`
  height: 80px;
  display: flex;
  padding: 30px;
  border-bottom: 2px solid transparent;
  &:hover {
    color: none;
  }

  @media screen and (max-width: 960px) {
    width: 80%;
    display: none;

    &:hover {
      border-bottom: 2px solid transparent;
    }
  }
`;
