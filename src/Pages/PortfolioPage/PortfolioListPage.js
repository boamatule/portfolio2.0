import React from 'react';
import portfolioContent from '../../../src/portfolio-content.json';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

function PortfolioListPage() {
  return (
    <>
      <ProjectsList projects={portfolioContent} />
    </>
  );
}

export default PortfolioListPage;
