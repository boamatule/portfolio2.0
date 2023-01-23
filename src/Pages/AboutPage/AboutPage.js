/* eslint-disable react/function-component-definition */
import React from 'react';
import { Container } from '../../global-styles';
import { AboutWrapper, Heading, Description } from './AboutPageStyles';
import PortfolioListPage from '../PortfolioPage/PortfolioListPage';

const AboutPage = () => (
  <Container>
    <AboutWrapper>
      <Heading>Hello! I'm Boa Matule!</Heading>
      <Description>
        I'm a Full Stack Software Developer with background in hospitality's industry as a Chef and E-commerce Manager as a Founder. I'm based in beautiful Oslo, Norway. I'm originally from the pearl of Indian Ocean, Mozambique.
        I love building, architecting, and scaling web and mobile applications using the latest tech's stack in the market. 
      </Description>
    </AboutWrapper>
  </Container>
);

export default AboutPage;
