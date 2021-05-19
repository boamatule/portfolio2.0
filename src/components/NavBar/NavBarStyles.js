import styled from 'styled-components/macro';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../global-styles';
// import { Link as LinkScroll } from 'react-scroll';

// export const Nav = styled.nav`
//   background: #282c34;
//   height: 80px;
//   /* margin-top: -80px; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1rem;
//   position: sticky;
//   top: 0;
//   z-index: 10;
//   border-bottom: 2px solid #01bf71;

//   @media screen and (max-width: 960px) {
//     transition: 0.8s all ease;
//   }
// `;

// export const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1100px;
// `;

// export const NavLogo = styled(LinkRouter)`
//   color: #fff;
//   justify-self: flex-start;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;
//   cursor: pointer;

//   &:hover {
//     color: silver;
//   }
// `;

// export const MobilIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 1.8rem;
//     color: #fff;
//     cursor: pointer;
//   }
// `;

// export const NavMenu = styled.ul`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   /* margin-right: -22px; */

//   @media screen and (max-width: 768) {
//     display: none;
//   }
// `;

// export const NavItem = styled.li`
//   height: 80px;
// `;

// export const NavLinks = styled(LinkRouter)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   font-weight: bold;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;

//   &.active {
//     border-bottom: 3px solid #01bf71;
//   }

//   /* &:hover {
// 		color: silver;
// 	}; */
// `;

// export const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(LinkRouter)`
//   border-radius: 50px;
//   background: #01bf71;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #010606;
//   }
// `;

// export const SocialIcons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100px;

//   &:hover {
//   }
// `;

// export const SocialIconLink = styled.a`
//   color: silver;
// `;

export const Nav = styled.nav`
  background: #101522;
  height: 80;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
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
  /* color: #fff; */
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* cursor: pointer;
  text-decoration: none;
  font-size: 2rem; */

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
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
    padding: 2rem;
    display: table;

    &:hover {
      color: #4b59f7;
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
    height: 120px;
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
