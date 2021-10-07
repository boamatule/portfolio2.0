import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { MdArrowForward, MdKeyboardArrowRight, FiSend } from 'react-icons/md';
import { Container, Button } from '../../global-styles';

export const ContactContainer = styled(Container)`
  margin-top: 100px;
  ${Container}
  justify-content: center;
  align-items: center;
  width: 60%;
  @media screen and (max-width: 960px) {
    width: 100%;
    /* padding: 0px 0px 0px 100px;
    display: flex;
    align-items: center; */
  }
`;

export const ContactWrapper = styled.div`
  /* margin-top: 80px; */
  align-items: center;
  justify-content: center;
  text-align: start;
  padding: 0px 0px 10px 0px;

  @media screen and (max-width: 960px) {
    align-items: center;
    justify-content: center;
    text-align: start;
    padding: 0px 0px 0px 10px;
  }
`;

export const Description = styled.h2`
  padding: 0px 0px 0px 80px;
  max-width: 75%;
  color: silver;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: normal;
  /* justify-content: center;
  align-items: center;
  text-align: center; */

  @media screen and (max-width: 960px) {
    font-size: 14px;
    padding: 0px 0px 0px 0px;
    justify-content: center;
    max-width: 90%;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  padding: 0px 0px 20px 80px;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#EEE142')};

  @media screen and (max-width: 960px) {
    font-size: 20px;
    max-width: 90%;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  max-width: 80%;
  margin: 40px auto;
  /* border: 1px solid #eee142; */
  padding: 10px;
  border-radius: 1px;
  box-shadow: rgba(0, 0, 0, 0.1);
  background: transparent;
  /* position: sticky; */

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  color: silver;
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
  color: silver;
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
  color: silver;
  font-size: 34px;
  text-align: center;
`;

export const ContactButton = styled(Button)`
  ${Button};
  font-size: 12px;
  /* font: ${({ fontBig }) => (fontBig ? '12px' : '10px')}; */
  font-weight: bold;
  border-radius: 0px;
`;

export const ContactButtonWrapper = styled.div`
  /* width: 50%; */
  justify-content: center;
  align-items: center;
  display: flex;

  @media screen and (min-width: 960px) {
    justify-content: center;
    align-items: center;
    display: flex;
    /* width: 50%; */
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
