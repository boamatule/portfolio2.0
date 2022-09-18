import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const AboutWrapper = styled.div`
  margin-top: 80px;
  margin-left: 60px;
  margin-right: 60px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    margin: 40px 22px auto;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  color: grey;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 20px;
  font-weight: normal;
  justify-content: center;
  align-items: center;
  background: transparent;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    margin-top: 20px;
    justify-content: center;
  }
`;

export const Heading = styled.h2`
  font-weight: bold;
  margin-bottom: 40px;
  line-height: 1px;
  letter-spacing: 1px;
  font-size: 18px;
  justify-content: center;
  text-align: center;
  margin-top: 140px;
  color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};

  @media screen and (max-width: 800px) {
    font-size: 16px;
    font-weight: bold;
    margin: 100px 0px auto;
  }
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

  @media screen and (max-width: 800px) {
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

  @media screen and (max-width: 800px) {
    justify-content: center;
    display: flex;
  }
`;

export const GetInTouchWrapper = styled.div`
  color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};
  text-transform: none;
  font-weight: normal;
  font-size: 20px;
  line-height: 0.5px;
  margin-top: 10px;
  margin-bottom: 40px;

  &:hover {
    transform: translate(0%);
    transition: none;
    border-bottom: 8px solid #4568dc;
    width: 25%;
  }

  @media screen and (max-width: 800px) {
    line-height: 10px;

    &:hover {
      border-bottom: 8px solid #4568dc;
      width: 50%;
    }
  }
`;
