import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const AboutContainer = styled.div`
  text-align: flex-start;

  margin: 100px 200px auto;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    justify-content: cente
    align-items: center;
    margin: 40px 22px auto;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  padding-bottom: 20px;
  color: grey;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 16px;
  font-weight: normal;
  justify-content: flex-start;
  margin-left: 10px;
  margin-right: 10px;
  background: transparent;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    margin-top: 20px;
    justify-content: flex-start;
  }
`;

export const Subtitle = styled.h2`
  margin-top: 20px;
  color: black;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: normal;
  justify-content: flex-start;
  margin-left: 0;
  margin-bottom: 20px;
  padding: 0px 10px 0px 10px;
  background: transparent;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Heading = styled.h2`
  font-weight: bold;
  font-size: 40px;
  margin-bottom: 40px;
  justify-content: flex-start;
  background: transparent;
  color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};

  @media screen and (max-width: 960px) {
    font-size: 30px;
    /* margin-left: 42px; */
    margin-top: 0px;
  }
`;

export const TextWrapper = styled.div`
  color: silver;
  padding-top: 0;
  /* padding-bottom: 60px; */
  @media screen and (max-width: 960px) {
    padding-bottom: 65px;
    /* color: silver; */
    background: transparent;
  }
`;

export const Title = styled.p`
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
  justify-content: center;
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 960px) {
    justify-content: center;
    display: flex;
  }
`;
