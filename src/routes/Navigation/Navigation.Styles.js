import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../../global-styles';
import { FaBars } from 'react-icons/fa';

export const Nav = styled(motion.div)`
  background: transparent;
  /* width: 100%; */
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    /* margin-right: auto;
    margin-left: auto;
    padding-right: 4px;
    padding-left: 4px; */
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin-bottom: 120px;
  /* z-index: 1; */

  @media screen and (max-width: 960px) {
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
  justify-content: center;
  list-style: none;
  margin-right: 0rem;
  width: 60vw;
  background: transparent;
  outline: none;
  margin-top: 0px;
  margin-bottom: 160px;
  text-transform: uppercase;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    margin-top: 80px;
    justify-content: space-between;
    padding: 0px 0px;
    text-align: center;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  height: 80px;

  @media screen and (max-width: 960px) {
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  text-align: center;
  height: 100%;
  color: grey;
  letter-spacing: 8px;
  font-size: 700;
  line-height: 20px;
  font-family: 'Oswald', monospace;
  font-style: none;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;


  &:hover {
		transform: none;
		background: none;
		padding: 10px 22px;
    color: #4568dc;
	}

  @media screen and (max-width: 960px) (max-width: 960px) {
    font-size: 12px;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    margin-left: 20px;
    font-size: 700;
  }
`;

export const NavItemSocialIconWrapper = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap-reverse;
  position: relative; 
  top: 0;
  padding-right: 80px;

  @media screen and (max-width: 960px) {
    padding-right: 160px;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: nowrap;
  }
`;

export const NavItemSocialWrapper = styled.div`
  &:hover {
  border: 2px solid red;
  }

  @media screen and (max-width: 960px) {  }
`;
export const NavItemSocialIconLinkMotion = styled(motion.div)`
`;

export const NavItemSocialIconLink = styled.a`
  display: flex;
  top: 0;
  height: 100px;
  text-decoration: none;
  align-items: center;
  padding: 0rem 1rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  justify-content: space-between;

  &:hover {
    border: 50% solid red;
  }

  @media screen and (max-width: 960px) {
    padding: 2.9rem 0.4rem;
    top: 0;
  }
`;

export const MobileIcon = styled.div`
  display: block;

  // @media screen and (max-width: 760px) {
  // 	display: block;
  // 	position: absolute;
  // 	top: 0;
  // 	right: 0;
  // 	transform: translate(-100%, 75%);
  // 	font-size: 1.8rem;
  // 	cursor: pointer;
  // 	color: purple;
  // }
  display: none;

  @media screen and (max-width: 960px) {
    z-index: 999;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    // color: white;
  }
`;

export const Bars = styled(FaBars)`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  margin: 14px 10px;
  transform: translate(-100%, 75%);
  font-size: 2rem;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    // color: purple;
  }
  `;