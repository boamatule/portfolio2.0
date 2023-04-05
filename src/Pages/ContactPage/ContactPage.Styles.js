import styled from 'styled-components/macro';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { Container, Button } from '../../global-styles';

export const ContactContainer = styled(Container)`
  margin-top: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 38px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContactFormColumn = styled.div`
  width: 50%;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const FormContainerColumn = styled(ContactFormColumn)`
  padding: 0 20px;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: flex-start;
  
  @media screen and (max-width: 960px) {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
`;

export const Heading = styled.h1`
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 4px;
  margin-bottom: 20px;
  color:  #4568dc;
  font-size: 400;
  font-family: 'Rubik', sans-serif;
  margin-bottom: 20px;
  padding: 0px 0px;
`;

export const Title = styled.p`
  margin-top: 16px;
  color: #474747;
  font-size: 16px;
  letter-spacing: 2.8px;
  line-height: 20px;
  font-weight: normal;
  margin-bottom: 60px;
  font-weight: normal;

  @media screen and (max-width: 960px) {
    font-size: 14px;
  }
`;

export const Form = styled.form`
  margin: auto;
  width: 100%;
  display: grid;
  box-shadow: rgba(0, 0, 0, 0.1);
  background: transparent;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  color: #474747;
  font-weight: normal;
  letter-spacing: 1.6px;
  line-height: 24px;
  font-size: 16px;
  padding: 4px 1px;
  margin-bottom: 20px;
  border-bottom: 1px solid grey;
  border: 2px solid #4568dc;
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
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

export const TextArea = styled.textarea`
  background: transparent;
  border: 0;
  border: none;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 24px;
  padding: 20px 1px;
  margin-bottom: 14px;
  /* border-bottom: 1px solid #474747; */
  color: #474747;
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 1.6px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 14px;
  background-color: none;
  color: white;
  text-transform: uppercase;
  font-weight: normal;
  border: 4px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const ContactButtonWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 960px) {
    justify-content: center;
    display: flex;
    
  }
`;

export const ArrowRight = styled(MdOutlineArrowRightAlt)`
  display: flex;
  font-size: 200px;
  font-weight: bold;
  color: white;
  width: 100px;
  height: 40px;
`;

