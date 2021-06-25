import React from 'react';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import { Container } from '../../global-styles';
import portfolioContent from './portfolio-content';

const PortfolioListPage = () => (
  <Container>
    <ProjectsList projects={portfolioContent} />
  </Container>
);

export default PortfolioListPage;
