import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import { Container, Button } from '../../global-styles';

export const ContactContainer = styled(Container)`
  margin-top: 120px;
  ${Container}
  justify-content: flex-start;
  text-align: flex-start;
  /* padding: 40px 40px; */

  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`;

export const Title = styled.p`
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 24px;
  justify-content: flex-start;
  text-align: flex-start;
  font-size: 16px;
  margin-bottom: 0px;
  color: yellow;

  @media screen and (min-width: 600px) {
    max-width: 100%;
    /* margin-right: auto;
    margin-left: auto; */
    padding-right: 4px;
    padding-left: 4px
  }

  @media screen and (max-width:768px) {
    max-width: 100%;
    padding-right: 4px;
    padding-left: 4px
  }

  @media screen and (min-width: 769px) and (max-width:1024px) {
    /* max-width: 1200px; */
  }
  @media screen and (min-width: 1025px) {
    /* max-width: 1400px; */
  }

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
  /* border: none; */
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
  /* border: 0;
  border: none; */
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
  font-weight: bold;
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
