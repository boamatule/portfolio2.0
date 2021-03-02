import React from 'react';
import NotFoundPage from '../NotFoundPage';
import portfolioContent from '../PortfolioPage/portfolio-content';


const PortfolioPage = ({ match}) => {
	const name = match.params.name;
	const project = portfolioContent.find(project => project.name === name);

	if (!project) return <NotFoundPage />

	return (
		<>
			<h1>{project.title}</h1>
			{project.description.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
		</>
	)
}

export default PortfolioPage;
