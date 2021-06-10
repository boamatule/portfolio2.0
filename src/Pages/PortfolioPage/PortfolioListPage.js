import React from 'react';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import { Container } from '../../global-styles';
import portfolioContent from './portfolio-content';

const PortfolioListPage = () => (
  <>
    <ProjectsList projects={portfolioContent} />
  </>
);

export default PortfolioListPage;
