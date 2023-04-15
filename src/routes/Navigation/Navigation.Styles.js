import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link as LinkRoute } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container } from '../../global-styles';


export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-bottom: 100px;
  top: 0;
  font-size: 1rem;
  z-index: 999;
  position: sticky;
  background: transparent;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease-out;
  }
`;
export const MobileIconIconWrapper = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	font-size: 2rem;
	outline: none;
	background: transparent;
	cursor: pointer;
  color:  #4568dc;
`;

export const FaBarsIcon = styled(FaBars)`
    display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    /* transform: translate(-100%, 60%); */
  font-size: 1.8rem;
  background: transparent;
  /* color: #4568dc */
  }
`;
export const DropdownCloseIcon = styled(FaTimes)`
	color: red;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0px 0px;
  font-family: Rubik;
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
  list-style: none;
  text-transform: uppercase;
  justify-self: flex-start;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;
  /* padding: 0 1rem; */
  /* border-bottom: 4px solid transparent; */
  
  &:hover {
    transition: all 0.2s ease-in-out;
    margin-top: -0.5rem;
    border-bottom: 4px solid #4568dc;
    padding-bottom: 0;
  }
`;

export const NavLinks = styled(LinkRoute)`
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
  color: grey;
  /* color: #474747; */
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
  justify-content: flex-end;  
  flex-wrap: wrap-reverse;
  position: relative; 
  top: 0;
  height: 80px;

  @media screen and (max-width: 960px) {
    padding-right: 160px;
    align-items: center;
    flex-wrap: wrap-reverse;
    position: absolute; 
    align-items: center;
    flex-direction: row;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 8rem;

  @media screen and (max-width: 960px) {
    top: 0px;
    align-items: flex-start;
  }
`;


export const NavItemSocialIconLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0rem;
    background-color: #fff;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    
    /* & > * {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      font-size: 5rem;
    } */
  }
`;

export const NavItemSocialIconLink = styled.a`
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

  @media screen and (max-width: 960px) {
    margin-left: 1rem;
  }

  /* increase touch target size */
  width: 38px;
  height: 38px;
  padding-left: 0rem;
  margin-right: 0rem;

  /* remove unnecessary styles */
  top: auto;
  justify-content: center;
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


export const Image = styled(LazyLoadImage)`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
  margin-right: 0.5rem;
`;


export const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const DropdownMenuItem = styled(LinkRoute)`
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
`;