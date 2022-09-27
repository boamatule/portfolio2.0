import React, { useState } from 'react';
import { Container } from '../../global-styles';
import { AboutWrapper, Heading, Description } from './AboutPageStyles';
import PortfolioListPage from '../PortfolioPage/PortfolioListPage';

const AboutPage = () => (
  <>
    <AboutWrapper>
      <Heading>Hello! I'm Boa Matule!</Heading>
      <Description>
        I have been coding for the last 3 years now! I live in Oslo, Norway but I'm originally from Xai-Xai, Mozambique.
        I love building, architecting, and scaling web and mobile apps :).
      </Description>
    </AboutWrapper>
    <PortfolioListPage />
  </>
);

export default AboutPage;
