import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Button } from '../../global-styles';

export const ContactContainer = styled(Container)`
  margin-top: 100px;
  ${Container}
  justify-content: center;
  width: 60%;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`;

export const ContactWrapper = styled.div`
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const Description = styled.h2`
  padding: 0px 0px 0px 80px;
  color: grey;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: normal;

  @media screen and (max-width: 800px) {
    font-size: 14px;
    padding: 0px 0px 0px 0px;
    justify-content: center;
    max-width: 90%;
  }
`;

export const Title = styled.h2`
  letter-spacing: 0.5px;
  line-height: 10px;
  font-weight: normal;
  margin-top: 120px;
  margin-bottom: 20px;
  font-size: 16px;
  justify-content: flex-start;
  color: ${({ lightText }) => (lightText ? '#5454CB' : '#6969FB')};

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  margin: 40px auto;
  padding: 0px 0px 0px 0px;
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
  font-size: 16px;
  padding: 4px 1px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
  border: 2px solid #4568dc;
  border-radius: 2px;
  padding: 8px;

  &:last-of-type {
    margin-bottom: 20px;
    font-size: 14px;
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
  font-size: 16px;
  line-height: 20px;
  padding: 20px 1px;
  margin-bottom: 14px;
  border-bottom: 1px solid grey;
  color: grey;
  border: 2px solid #4568dc;
  border-radius: 2px;
  padding: 8px;
  height: 200px;

  &:focus {
    outline: true;
    box-shadow: none;
  }

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const ContactButton = styled(Button)`
  display: flex;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: none;
  color: white;
  text-transform: uppercase;
  font-weight: normal;
  border: 4px;
  cursor: pointer;
  justify-content: center;
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
