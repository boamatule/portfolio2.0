/* eslint-disable react/function-component-definition */
import React from 'react';
import { Container } from '../../global-styles';
import { AboutWrapper, Heading, Description, ImageColumn, TextColumn, Image } from './AboutPageStyles';

const AboutPage = () => (
  <AboutWrapper>
    <ImageColumn>
      <Image  src="../../images/avatar.webp" alt="Boa"  />
    </ImageColumn>
    <TextColumn>
      <Heading>I'm Boa Matule.</Heading>
      <Description>
        I'm a Full Stack Software Developer
        with a background in the hospitality industry as a chef and
        E-commerce Manager.
        I'm based in beautiful Oslo, Norway.
        I'm originally from the pearl of the Indian Ocean, Mozambique.
        I love building, architecting, and scaling web and mobile applications using the latest tech stack in the market.
      </Description>
    </TextColumn>
  </AboutWrapper>
);

export default AboutPage;