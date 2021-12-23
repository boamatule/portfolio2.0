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

  @media screen and (max-width: 960px) {
    font-size: 14px;
    padding: 0px 0px 0px 0px;
    justify-content: center;
    max-width: 90%;
  }
`;

export const Title = styled.h2`
  font-weight: normal;
  margin-top: 120px;
  margin-bottom: 20px;
  font-size: 40px;
  margin-left: 20px;
  justify-content: flex-start;
  /* text-transform: uppercase; */
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#4568DC')};

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 100%;
  max-width: 80%;
  margin: 40px auto;
  padding: 10px;
  border-radius: 1px;
  box-shadow: rgba(0, 0, 0, 0.1);
  background: transparent;

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
  height: 200px;

  &:focus {
    outline: true;
    box-shadow: none;
  }

  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const Text = styled.span`
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
    justify-content: center;
    align-items: center;
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
