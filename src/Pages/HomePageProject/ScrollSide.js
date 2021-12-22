import React from 'react';
import HomePageProject from './HomePageProject';
import { Container } from '../../global-styles';
import portfolioContent from '../PortfolioPage/portfolio-content';

const ScrollSide = () => (
  <Container>
    <HomePageProject projects={portfolioContent} />
  </Container>
);

export default ScrollSide;
