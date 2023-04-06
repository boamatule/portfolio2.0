import React from 'react';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import portfolioContent from '../../../src/portfolio-content.json';

function PortfolioListPage() {
  return (
    <>
      <ProjectsList projects={portfolioContent} />
    </>
  );
}

export default PortfolioListPage;
