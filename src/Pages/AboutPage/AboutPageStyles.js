import styled from 'styled-components/macro';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 80px 0; */
  /* height: 800px; */
  z-index: 1;
  /* margin-top: 100px; */
  /* padding-top: 100px; */
  /* position: relative; */
`;

export const Content = styled.div`
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  /* width: 100%;
  height: 100%; */
  padding: 10px 100px;
  /* overflow: hidden; */
  display: flex;
  /* max-width: 1200px; */
  /* align-items: center; */
  justify-content: flex-start;
  /* padding: 8px 24px; */
  flex-direction: column;
  z-index: 1;
`;

export const H1 = styled.h2`
  color: silver;
  font-size: 20px;
  /* text-align: center; */
  justify-content: flex-start;
  letter-spacing: 1.4px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const P = styled.p`
  justify-content: flex-start;
  margin-top: 20px;
  padding-bottom: 40px;
  color: silver;
  font-size: 18px;
  letter-spacing: 1.4px;
  /* line-height: 24px; */
  /* text-align: center; */
  /* max-width: 600px; */

  @media screen and (max-width: 760px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Title = styled.h1`
  color: purple;
  margin-top: 60px;
  /* padding-bottom: 20px; */
  font-size: 40px;
  /* margin: 16px; */
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  justify-content: flex-start;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '')};
  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')}; */
`;

// export const Button = styled.a`
//   justify-items: center;
//   justify-content: center;
//   background: #01bf71;
//   /* max-width: 100px; */
//   border-radius: 50px;
//   font-size: 16px;
//   font-weight: normal;
//   margin: 24px 0 12px;
//   padding: 16px;
//   border: 0;
//   color: white;
//   cursor: pointer;
//   text-decoration: none;

//   &:disabled {
//     opacity: 0.5;
//   }
// `;

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

// export const NavItemBtn = styled.li`
//   @media screen and (max-width: 960px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 120px;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;
//   padding: 8px 16px;
//   width: 100%;
//   height: 100%;
//   border: none;
//   outline: none;
// `;
