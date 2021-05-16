import React from 'react';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import portfolioContent from './portfolio-content';

const PortfolioListPage = () => (
  <>
    <ProjectsList projects={portfolioContent} />
  </>
);

export default PortfolioListPage;
