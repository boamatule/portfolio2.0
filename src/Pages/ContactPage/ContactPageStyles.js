import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight, FiSend } from 'react-icons/md';
import { Container, Button } from '../../global-styles';

export const ContactContainer = styled(Container)`
  margin-top: 80px;
  ${Container}
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    /* padding: 0px 0px 0px 100px;
    display: flex;
    align-items: center; */
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
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    padding: 0px 0px 0px 20px;
    justify-content: center;
    max-width: 90%;
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 22px;
  padding: 0px 0px 10px 300px;
  max-width: 75%;
  justify-content: center;
  text-align: center;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')};

  @media screen and (max-width: 960px) {
    font-size: 20px;
    padding: 0px 0px 40px 20px;
    justify-content: flex-start;
    max-width: 90%;
  }
`;

export const Form = styled.form`
  display: grid;
  max-width: 60%;
  margin: 40px auto;
  border: 1px solid #eee142;
  padding: 24px;
  border-radius: 1px;
  box-shadow: rgba(0, 0, 0, 0.1);
  background: transparent;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    /* padding: 50px 0px 0px 0px; */
  }
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
    outline: true;
    box-shadow: none;
  }

  @media screen and (max-width: 960px) {
    font-size: 12px;
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
    outline: true;
    box-shadow: none;
  }

  @media screen and (max-width: 960px) {
    font-size: 12px;
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
  ${Button};
  border-radius: 1px;
  width: 80px;
  display: flex;
  color: grey;
  font-size: 12px;
  font: ${({ fontBig }) => (fontBig ? '16px' : '12px')};
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

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

  @media screen and (min-width: 960px) {
    width: 10.6rem;
    height: 10.6rem;
  }
`;
