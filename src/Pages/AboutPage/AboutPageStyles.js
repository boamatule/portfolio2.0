import styled from 'styled-components/macro';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from '../../global-styles';

export const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 80px 0px 100px;
  width: 50%;
`;

export const Content = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  height: auto;
  margin-left: 60px;
  /* color: silver; */
  /* justify-content: flex-start; */
  /* align-items: center; */
  /* overflow: hidden; */
  /* display: flex; */
  /* max-width: 1200px; */
  /* align-items: center; */
  /* justify-content: center; */
  /* text-align: start; */
  /* justify-content: flex-start; */
  padding: 100px 0px 40px 60px;
  /* flex-direction: column; */
  /* z-index: 1; */
  /* padding-right: 160px; */
  /* padding-left: 60px; */
  @media screen and (max-width: 960px) {
    padding-right: 0px;
    padding-left: 0px;
    width: 100%;
    height: auto;
  }
`;

export const H1 = styled.h2`
  color: silver;
  font-size: 18px;
  /* text-align: center; */
  justify-content: flex-start;
  letter-spacing: 1.6px;
  line-height: 24px;
  margin-bottom: 35px;

  /* @media screen and (max-width: 480px) {
    font-size: 32px;
  } */
`;

export const Description = styled.p`
  margin-top: 20px;
  padding-bottom: 40px;
  color: silver;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: none;
  font-weight: normal;
  justify-content: flex-start;
  margin-left: 0;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 20px;
  color: silver;
  letter-spacing: 1.6px;
  font-weight: normal;
  letter-spacing: 1.6px;
  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Heading = styled.h1`
  font-weight: normal;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 40px;
  justify-content: flex-start;
  /* text-align: center; */
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')};

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export const TextWrapper = styled.div`
  color: silver;
  padding-top: 0;
  /* padding-bottom: 60px; */
  @media screen and (max-width: 960px) {
    padding-bottom: 65px;
    /* color: silver; */
  }
`;

export const Title = styled.h1`
  color: purple;
  margin-top: 60px;
  font-size: 40px;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  justify-content: flex-start;
  font-weight: normal;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '')};
  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#1c2237')}; */
`;

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
  margin-bottom: 0px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
  }

  @media screen and (max-width: 960px) {
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

export const ButtonWrapper = styled.div`
  @media screen and (max-width: 960px) {
    cursor: pointer;
    justify-content: center;
    /* margin-top: 20px; */
    /* padding: 10px 0px 10px 0px; */
    align-items: center;
    width: 40%;
    display: flex;
  }
`;
