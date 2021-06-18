import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Container } from '../../global-styles';

// import { Link } from 'react-scroll';

export const ContactContainer = styled(Container)`
  width: 600px;
  ${Container}
`;

export const ContactWrapper = styled.div`
  /* display: flex;
  align-items: flex-start; */
  padding: 100px 0px 0px 125px;
  background: transparent;
  /* width: auto; */
  /* width: 600px;
  height: 600px; */
  /* background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')}; */

  @media screen and (max-width: 760px) {
    padding: 80px 0px 0px 0px;
    display: flex;
    align-items: flex-start;
  }
`;

export const Description = styled.p`
  padding: 0px 0px 20px 12px;
  color: silver;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 24px;

  @media screen and (max-width: 760px) {
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: flex-start;
  }
`;

export const Title = styled.h1`
  /* font-weight: normal; */
  margin-bottom: 40px;
  font-size: 30px;
  padding: 0px 0px 0px 12px;
  /* line-height: 1.1; */
  /* justify-content: center;
  text-align: center; */
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')};
`;

export const Form = styled.form`
  height: auto;
  /* width: 80%; */
  z-index: 1;
  display: grid;
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px 400px 0px 10px;
  border-radius: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0);
`;

export const FormWrapper = styled.div`
  /* padding: 10px 100px 0px 0px; */
  /* padding-left: 40px; */
  /* margin-right: 300px; */
`;

export const Input = styled.input`
  background: none;
  border: none;
  color: silver;
  font-size: 16px;
  padding: 8px 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;

  &:last-of-type {
    margin-bottom: 20px;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
    padding: 8px 120px 2px 0px;
  }
`;

export const TextArea = styled.textarea`
  background: none;
  border: 0;
  border: none;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 0px;
  margin-bottom: 14px;
  border-bottom: 1px solid grey;
  color: silver;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media screen and (max-width: 760px) {
    font-size: 14px;
    padding: 50px 0px 0px 0px;
  }
`;

export const Text = styled.span`
  /* margin-top: 24px; */
  margin-bottom: 24px;
  color: black;
  font-size: 34px;
  text-align: center;
`;

export const Button = styled.button`
  border-radius: 4px;
  width: auto;
  height: auto;
  background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  margin-top: 20px;
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
