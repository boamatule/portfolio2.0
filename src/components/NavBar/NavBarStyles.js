import styled from 'styled-components/macro';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../global-styles';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: stycky;
  top: 0;
  z-index: 999;
  /* border: 1px solid pur; */
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  /* justify-content: space-between; */
  height: 80px;
  justify-content: center;
  ${Container}
`;

export const NavLogo = styled(Link)`
  display: inline-flex;
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  padding: 12px 0px 0px 0px;
  /* font-size: 1.5rem; */
  /* align-items: center; */

  @media screen and (max-width: 960px) {
    width: 100%;
    height: none;
    padding: 10px 10px 10px 10px;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  /* border-radius: 100%; */
  /* border: 1px solid transparent; */

  @media screen and (min-width: 480px) {
    /* width: 60px;
    height: 50px; */
    /* border-radius: 100%; */
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
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    /* background: ${({ lightBg }) => (lightBg ? '#101522' : '#101522')};
    background: ${({ lightBg }) => (lightBg ? '#101522' : '#fff')}; */
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 4px solid #eee142;
  }

  @media screen and (max-width: 960px) {
    width: 80%;

    &:hover {
      border-bottom: 2px solid transparent;
      /* border-bottom: 4px solid #eee142; */
    }
  }
`;

export const NavLinks = styled(Link)`
  display: flex;
  font-size: 16px;
  color: silver;
  font-weight: normal;
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

export const NavSocialIconsWrapper = styled.div`
  /* height: 80px; */
  /* flex-direction: column; */

  &:hover {
    /* border-bottom: 4px solid #eee142; */
  }

  @media screen and (max-width: 960px) {
    /* width: 80%; */

    &:hover {
      border-bottom: 2px solid transparent;
      /* border-bottom: 4px solid #eee142; */
    }
  }
`;

export const NavItemSocialIconLink = styled.a`
  display: flex;
  font-size: 16px;
  color: silver;
  font-weight: normal;
  text-decoration: none;
  align-items: center;
  padding: 0.5rem 4.2rem;
  height: 100%;
  /* color: red; */
  color: silver;

  &:hover {
    color: #01bf71;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    padding: 2rem;
    display: table;
    font-size: 14px;

    &:hover {
      transition: 0.3s ease;
    }
  }

  &:hover {
    color: #01bf71;
    /* transition: 0.3s ease-out; */
  }
`;

export const NavItemSocialIcon = styled.div`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #01bf71;
  }

  @media screen and (max-width: 960px) {
    width: 80%;

    &:hover {
      border-bottom: 2px solid transparent;
      /* border-bottom: 4px solid #eee142; */
    }
  }
`;

export const NavItemToggle = styled.div`
  height: 80px;
  display: flex;

  border-bottom: 2px solid transparent;
  &:hover {
    color: none;
  }

  @media screen and (max-width: 960px) {
    width: 80%;

    &:hover {
      border-bottom: 2px solid transparent;
      /* border-bottom: 4px solid #eee142; */
    }
  }
`;
