/* eslint-disable react/function-component-definition */
import React from 'react';
import { Container } from '../../global-styles';
import { AboutWrapper, Heading, Description, ImageColumn, TextColumn, Image } from './AboutPage.Styles';

const AboutPage = () => (
  <AboutWrapper>
    {/* <ImageColumn>
      <Image  src="../../images/avatar_1.png" alt="Boa"  />
    </ImageColumn> */}
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
    <ImageColumn>
      <Image  src="../../images/avatar_1.png" alt="Boa"  />
    </ImageColumn>
  </AboutWrapper>
);

export default AboutPage;