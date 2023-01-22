import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Button } from '../../global-styles';

export const ContactContainer = styled(Container)`
  margin-top: 80px;
  ${Container}
  justify-content: center;
  width: 60%;
  text-align: center;
  padding: 40px 40px;
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h2`
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 16px;
  justify-content: flex-start;
  color: yellow;
  /* color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')}; */
  @media screen and (max-width: 800px) {
    font-size: 14px;
    letter-spacing: 1.6px;
    line-height: 20px;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  margin: 40px auto;
  box-shadow: rgba(0, 0, 0, 0.1);
  background: transparent;
  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  color: grey;
  font-weight: normal;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-size: 14px;
  padding: 4px 1px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
  border: 2px solid yellow;
  border-radius: 2px;
  padding: 8px;
  &:last-of-type {
    margin-bottom: 20px;
    font-size: 12px;
  }
  &:focus {
    outline: true;
    box-shadow: none;
  }
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const TextArea = styled.textarea`
  background: none;
  border: 0;
  border: none;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 1.6px;
  line-height: 24px;
  padding: 20px 1px;
  margin-bottom: 14px;
  border-bottom: 1px solid grey;
  color: grey;
  border: 2px solid yellow;
  border-radius: 2px;
  padding: 8px;
  height: 200px;
  &:focus {
    outline: true;
    box-shadow: none;
  }
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const ContactButton = styled(Button)`
  display: flex;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 1.6px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 12px;
  background-color: none;
  color: white;
  text-transform: uppercase;
  font-weight: normal;
  border: 4px;
  cursor: pointer;
  justify-content: center;
  text-align: center;
`;

export const ContactButtonWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 800px) {
    justify-content: center;
    display: flex;
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
