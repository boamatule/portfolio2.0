import styled from 'styled-components/macro';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from '../../global-styles';

export const AboutContainer = styled(Container)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* padding: 40px 80px 0px 100px; */
  /* width: 50%; */
  /* height: 400px; */
  /* z-index: 1; */
  /* margin-top: 100px; */
  /* padding-top: 100px; */
  /* position: relative; */
  max-width: 900px;
  @media screen and (max-width: 960px) {
    /* padding: 40px 10px 0px 40px; */
  }
  ${Container}
`;

export const Content = styled.div`
  /* position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  /* width: 1000px;
  height: auto; */
  /* overflow: hidden; */
  /* display: flex; */
  /* max-width: 1200px; */
  /* align-items: center;
  justify-content: center; */
  padding: 60px 0px 0px 100px;
  /* flex-direction: column; */
  /* z-index: 1; */
  /* padding-right: 160px; */
  /* padding-left: 60px; */
  @media screen and (max-width: 960px) {
    padding-right: 0px;
    padding-left: 0px;
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
  color: grey;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: normal;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: grey;
  letter-spacing: 1.6px;
  font-weight: normal;
  /* color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')}; */
  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  font-weight: bold;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')};
  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : 'silver')}; */
  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 960px) {
    padding-bottom: 65px;
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
  margin-bottom: px;

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
