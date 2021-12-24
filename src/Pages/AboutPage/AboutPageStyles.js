import styled from 'styled-components/macro';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from '../../global-styles';

export const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 0px;
  /* width: 50%; */
`;

export const Content = styled.div`
  margin: 80px 40px auto;
  margin-bottom: 40px;
  justify-content: flex-start;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    margin: 0px 20px auto;
    /* margin-left: 300px; */
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  padding-bottom: 40px;
  color: black;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: none;
  font-weight: normal;
  justify-content: flex-start;
  margin-left: 10px;
  margin-right: 10px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Subtitle = styled.h2`
  margin-top: 20px;
  /* padding-bottom: 40px; */
  color: black;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: normal;
  justify-content: flex-start;
  margin-left: 0;
  margin-bottom: 20px;
  padding: 0px 10px 0px 10px;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Heading = styled.h2`
  font-weight: normal;
  margin-top: 120px;
  margin-bottom: 40px;
  font-size: 40px;
  margin-left: 40px;
  justify-content: flex-start;
  /* text-transform: uppercase; */
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#4568DC')};

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }

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
  cursor: pointer;
  justify-content: flex-end;
  display: flex;
  margin-right: 28px;
  margin-top: 20px;

  @media screen and (max-width: 960px) {
    cursor: pointer;
    margin-left: 40px;
    justify-content: flex-end;
    max-width: 50%;
    display: flex;
    margin-right: 28px;
  }
`;
