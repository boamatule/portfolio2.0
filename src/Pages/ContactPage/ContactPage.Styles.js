import { MdOutlineArrowRightAlt } from "react-icons/md";
import styled from "styled-components";
import { Button, Container } from "../../global-styles";

const ContactContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
  width: 100%;
  min-height: 100vh; /* Set a minimum height of 100vh to ensure it fits well on the page */
  padding: 6em 4em;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0em 2em; 
    background-color: transparent; 
  }

  /* @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0em 2em;
    background-color: transparent;
  } */
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
  padding: 0 0px;
  background-color: transparent;
  }

  @media screen and (max-width: 480px) {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 0 0px;
    background-color: transparent;
}
`, Heading = styled.h1`
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 4px;
  color: #4568dc;
  font-size: 32px;
  font-family: 'Roboto Mono', monospace;
  padding: 0;
  margin-bottom: 30px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`, Title = styled.p`
  margin-top: 16px;
  color: #999999;
  font-size: 16px;
  font-family: 'Roboto Mono', monospace;
  font-weight: normal;
  line-height: 24px;
  text-align: left;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    /* padding: 0em 1em; */
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
    /* padding: 10px; */
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
