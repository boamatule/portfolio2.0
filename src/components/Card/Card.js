/* eslint-disable react/prop-types */
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaGlobeAfrica, FaTwitter } from 'react-icons/fa';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';

import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  HorizontalRule,
  IconsContainer,
  ForgotPassword,
} from './Card.styles';

const Card = () => (
  <MainContainer>
    <WelcomeText>Welcome</WelcomeText>
    <InputContainer>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </InputContainer>
    <ButtonContainer>
      <Button />
    </ButtonContainer>
    <LoginWith>OR LOGIN WITH</LoginWith>
    <HorizontalRule />
    <IconsContainer>
      <Icon>
        <FaFacebook />
      </Icon>
      <Icon>
        <FaInstagram />
      </Icon>
      <Icon>
        <FaTwitter />
      </Icon>
    </IconsContainer>
    <ForgotPassword>Forgot Password ?</ForgotPassword>
  </MainContainer>
);

export default Card;
