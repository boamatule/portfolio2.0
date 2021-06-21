import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Button } from '../../global-styles';

// import { Link } from 'react-scroll';

export const ContactContainer = styled(Container)`
  /* width: 600px; */
  /* padding: 40px 80px 0px 100px; */
  /* justify-content: center; */
  margin-top: 80px;
  ${Container}
  @media screen and (max-width: 760px) {
    padding: 0px 0px 0px 0px;
  }
`;

export const ContactWrapper = styled.div`
  /* position: relative; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* padding: 100px 0px 0px 0px; */
  /* padding: 40px 0px 0px 100px; */
  /* background: transparent;
  text-align: flex-start; */
  /* width: auto; */
  /* width: 600px; */
  /* height: 600px; */
  /* background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')}; */

  @media screen and (max-width: 760px) {
    padding: 80px 80px 0px 10px;
    display: flex;
    align-items: flex-start;
  }
`;

export const Description = styled.p`
  padding: 10px 0px 10px 300px;
  max-width: 75%;
  color: grey;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: normal;

  @media screen and (max-width: 760px) {
    font-size: 12px;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 22px;
  padding: 0px 0px 10px 300px;
  max-width: 75%;
  /* padding: 0px 0px 0px 40px; */
  /* line-height: 1.1; */
  /* justify-content: center;
  text-align: center; */
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')};

  @media screen and (max-width: 760px) {
    font-size: 20px;
    /* padding: 0px 0px 0px 0px; */
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* text-align: flex-start; */
  }
`;

export const Form = styled.form`
  display: grid;
  max-width: 50%;
  margin: 40px auto;
  border: 1px solid #eee142;
  padding: 24px;
  border-radius: 1px;
  box-shadow: -8px 8px 16px 4px rgba(0, 0, 0, 0.1);
  background: transparent;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 12px 0;
  font-size: 14px;
  color: #777;
`;

export const Input = styled.input`
  background: none;
  border: none;
  color: grey;
  font-size: 14px;
  padding: 4px 1px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
  border: 1px solid #eee142;
  border-radius: 1px;
  padding: 8px;

  &:last-of-type {
    margin-bottom: 20px;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media screen and (max-width: 760px) {
    font-size: 12px;
    /* padding: 8px 120px 2px 0px; */
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
  border: 1px solid #eee142;
  border-radius: 1px;
  padding: 8px;

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
  border-radius: 1px;
  width: 80px;
  /* width: auto; */
  /* align-items: center; */
  justify-content: center;
  display: flex;
  color: grey;
  font-size: 12px;
  font: ${({ fontBig }) => (fontBig ? '16px' : '12px')};
  font-weight: bold;
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

export const Img = styled.img`
  width: 9.6rem;
  height: 9.6rem;
  border-radius: 50%;
  border: 1px solid transparent;

  @media screen and (min-width: 480px) {
    width: 10.6rem;
    height: 10.6rem;
  }
`;
