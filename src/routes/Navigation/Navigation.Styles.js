import styled from 'styled-components/macro';
import { Link as LinkRoute } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Container } from '../../global-styles';


export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
  height: 80px;
  margin-bottom: 180px;
  background: ${({ scrollNav}) => ( scrollNav ? 'transparent' : 'transparent')};
  top: 0;
  font-size: 1rem;
  z-index: 10;
  position: sticky;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;


export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0px 24px;
  max-width: 1100px;

  @media screen and (max-width: 960px) {

  }
`;

export const LogoContainer = styled(LinkRoute)`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  margin: 40px 0 60px 0;
  cursor: pointer;
  position: absolute;

  @media screen and (max-width: 960px) {
    position: flex;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-right: -22px;
  text-transform: uppercase;

  &.active {
    border-bottom: 3px solid #4568dc;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkRoute)`
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
  color: grey;
  letter-spacing: 8px;
  font-size: 700;
  line-height: 20px;
  font-family: 'Oswald', monospace;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;


  &.active {
    border-bottom: 3px solid #4568dc;
  }

  @media screen and (max-width: 960px) {
    padding: 1rem 0.5rem;
    margin: 0.5rem 0;

    &:hover {
      transition: 0.3s ease-out;
    }
  }
`;

export const NavItemSocialIconWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap-reverse;
  position: relative; 
  top: 0;
  height: 80px;
  padding-right: 80px;

  @media screen and (max-width: 960px) {
    padding-right: 160px;
    align-items: center;
    /* text-align: center; */
    flex-wrap: wrap-reverse;
    position: absolute; 
    align-items: center;
    flex-direction: row;
    /* justify-content: space-between; */
    /* margin: 10px 1px; */

  }
`;

export const NavItemSocialWrapper = styled.div`
  /* &:hover {
  border: 2px solid red;
  }

  @media screen and (max-width: 960px) {  
    margin-left: 40px;
  } */
`;
export const NavItemSocialIconLinkMotion = styled(motion.div)`
  @media screen and (max-width: 960px) {
    /* padding: 2.9rem 0.4rem; */
    top: 0px;
    /* margin-left: -40px; */
  }
`;

export const NavItemSocialIconLinkWrapper = styled.div`
  @media screen and (max-width: 960px) {
    /* margin-left: 0px; */
  }
`;

export const NavItemSocialIconLink = styled.a`
  display: flex;
  top: 0;
  height: 80px;
  text-decoration: none;
  align-items: center;
  padding: 0rem 0.5rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    /* padding: 2.9rem 0.4rem; */
    top: 0px;
    margin-left: 0px;
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
    background: transparent,
  }
`;
