import styled from 'styled-components/macro';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Button } from '../../global-styles';

export const ContactContainer = styled(Container)`
  margin-top: 100px;
  ${Container}
  justify-content: flex-start;
  width: 60%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const ContactWrapper = styled.div`
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
  /* max-width: 75%; */
  color: grey;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-weight: normal;

  @media screen and (max-width: 960px) {
    font-size: 14px;
    padding: 0px 0px 0px 0px;
    justify-content: center;
    max-width: 90%;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  margin-top: 120px;
  margin-bottom: 20px;
  font-size: 40px;
  justify-content: flex-start;
  /* color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#4568DC')}; */
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#3333CC')};

  @media screen and (max-width: 960px) {
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

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
`;

export const Input = styled.input`
  background: none;
  border: none;
  color: grey;
  font-weight: normal;
  font-size: 12px;
  padding: 4px 1px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
  border: 2px solid #4568dc;
  border-radius: 2px;
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
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  padding: 20px 1px;
  margin-bottom: 14px;
  border-bottom: 1px solid grey;
  color: silver;
  border: 2px solid #4568dc;
  border-radius: 2px;
  padding: 8px;
  height: 200px;

  &:focus {
    outline: true;
    box-shadow: none;
  }

  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const ContactButton = styled(Button)`
  /* ${Button}; */
  font-size: 14px;
  /* font: ${({ fontBig }) => (fontBig ? '12px' : '10px')}; */
  font-weight: normal;
  border-radius: 0px;
  display: flex;
  justify-content: flex-start;

  @media screen and (min-width: 960px) {
    justify-content: flex-start;
    display: flex;
  }
`;

export const ContactButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (min-width: 960px) {
    align-items: center;
    display: flex;
    justify-content: flex-end;
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
