import React from 'react';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import portfolioContent from './portfolio-content';


const PortfolioListPage = () => {
	return (
		<>
			{/* <h1>My Projects</h1> */}
			<ProjectsList projects={portfolioContent}/>
		</>
	);
};

export default PortfolioListPage;
