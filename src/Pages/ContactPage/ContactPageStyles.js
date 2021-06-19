import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Button } from '../../global-styles';

// import { Link } from 'react-scroll';

export const ContactContainer = styled(Container)`
  /* width: 600px; */
  padding: 40px 120px 0px 120px;
  /* justify-content: center; */
  ${Container}
  @media screen and (max-width: 760px) {
    padding: 0px 10px 0px 40px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  /* padding: 100px 0px 0px 125px; */
  background: transparent;
  text-align: center;
  /* width: auto; */
  /* width: 600px;
  height: 600px; */
  /* background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')}; */

  @media screen and (max-width: 760px) {
    padding: 80px 80px 0px 10px;
    display: flex;
    align-items: flex-start;
  }
`;

export const Description = styled.p`
  padding: 0px 0px 20px 0px;
  color: grey;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: normal;

  @media screen and (max-width: 760px) {
    font-size: 12px;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
  margin-bottom: 40px;
  font-size: 30px;
  /* padding: 0px 0px 0px 40px; */
  /* line-height: 1.1; */
  /* justify-content: center;
  text-align: center; */
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')};

  @media screen and (max-width: 760px) {
    font-size: 20px;
    padding: 0px 0px 0px 0px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* text-align: flex-start; */
  }
`;

export const Form = styled.form`
  /* height: auto; */
  /* width: 80%; */
  z-index: 1;
  display: grid;
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px 0px 0px 0px;
  border-radius: 0px;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0); */
`;

export const FormWrapper = styled.div`
  align-content: center;
`;

export const Input = styled.input`
  background: none;
  border: none;
  color: grey;
  font-size: 14px;
  padding: 4px 1px;
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
    font-size: 12px;
    padding: 8px 120px 2px 0px;
  }
`;

export const TextArea = styled.textarea`
  background: none;
  border: 0;
  border: none;
  font-size: 14px;
  line-height: 20px;
  padding: 20px 1px;
  margin-bottom: 14px;
  border-bottom: 1px solid grey;
  color: grey;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media screen and (max-width: 760px) {
    font-size: 12px;
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

export const ContactButton = styled(Button)`
  border-radius: 0px;
  /* width: auto; */
  align-items: center;
  justify-content: center;
  ${Button};
  // export const Button = styled.button
`;
//   border-radius: 4px;
//   width: auto;
//   height: auto;
//   background: ${({ primary }) => (primary ? '#01BF71' : '#010606')};
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
//   color: ${({ dark }) => (dark ? '#010606' : '#fff')};
//   font: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
//   outline: none;
//   border: none;
//   margin-top: 20px;
//   cursor: pointer;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
//   }
// `;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
