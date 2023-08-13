import { MdOutlineArrowRightAlt } from "react-icons/md";
import styled from "styled-components";
import { Button } from "../../global-styles";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
  width: 100%;
  min-height: 100vh; 
  padding: 40em 10em;
  margin-bottom: -300px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0em 0em;
    margin-top: -50px;
    margin-bottom: -100px;
    background-color: transparent; 
  }
`,

  ContactFormColumn = styled.div`
  width: 50%;
  align-self: flex-start;
  background-color: transparent;
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: unset;
    margin-bottom: 20px;
    padding: 0 0px;
  }
`, FormContainerColumn = styled(ContactFormColumn)`
  background-color: transparent;
  padding: 0 20px; /* Add padding to left and right */ 

`, FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: flex-start;
  width: 100%;
  padding: 0 40px;
  background-color: transparent;

  @media screen and (max-width: 768px) {
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  background-color: transparent;
  }

  @media screen and (max-width: 480px) {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 0 0px;
    background-color: transparent;
}
`, Heading = styled.h2`
  display: flex;
  font-weight: bold;
  letter-spacing: 4px;
  color: #4568dc;
  font-size: 32px;
  font-family: 'Roboto Mono', monospace;
  padding: 0;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 0 20px; 
    margin-top: 60px;
    /* margin-left: auto;
    margin-right: auto; */
  }
`, Title = styled.p`
  margin-top: 16px;
  color: #999999;
  font-size: 16px;
  font-weight: normal;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  line-height: 22px;
  text-align: left;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 0 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
    padding: 0 20px; /* Add padding to left and right */ 
  } 

`, Form = styled.form`
  margin: auto;
  width: 100%;
  display: grid;
  box-shadow: rgba(0, 0, 0, 0.1);
  background-color: transparent;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 0px;
    padding-left: 0px;
  }
`, Input = styled.input`
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
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`, TextArea = styled.textarea`
  background-color: transparent;
  border: 0;
  border: none;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 24px;
  padding: 20px 1px;
  margin-bottom: 14px;
  color: #474747;
  border: 2px solid #4568dc;
  border-radius: 2px;
  padding: 8px;
  height: 200px;
  &:focus {
    outline: true;
    box-shadow: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`, ContactButton = styled(Button)`
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
  cursor: pointer;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 36px;  }
  `, ContactButtonWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 20px;
`, ArrowRight = styled(MdOutlineArrowRightAlt)`
  display: flex;
  font-weight: bold;
  color: white;
  width: auto;
  height: 40px;
  `; export { ArrowRight, ContactButton, ContactButtonWrapper, ContactContainer, ContactFormColumn, Form, FormContainer, FormContainerColumn, Heading, Input, TextArea, Title };
