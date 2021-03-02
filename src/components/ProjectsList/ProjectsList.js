import React from 'react'
import { Link } from 'react-router-dom';
import {
	ProjectsListContainer,
	ProjectsListWrapper,
	ProjectListCard,
	ProjectListImage,
	ProjectsListH1,
	ProjectListH2,
	ProjectListP,
	ProjectsListBtnLink,
} from './ProjectsListStyles'


const ProjectsList = ({ projects}) => {
	return (
		<ProjectsListContainer>
			<ProjectsListWrapper>
			{projects.map((project, key) => (
				<div key={key} to={`/project/${project.name}`}>
					<ProjectListCard>
						<ProjectListImage src={project.image}/>
						<ProjectListH2>
							{project.title}
						</ProjectListH2>
						{/* <ProjectListP >
						{project.description[0].substring(0, 150)}...
						</ProjectListP> */}
						<div>
						<ProjectsListBtnLink
						href={project.GitHub}
						target="_blank"
						rel="noopener"
						primary>
							GitHub	
						</ProjectsListBtnLink>
						<ProjectsListBtnLink 
							href={project.URL}
							target="_blank"
							rel="noopener"
						primary>
							Visit me
							</ProjectsListBtnLink>
						</div>
					</ProjectListCard>

				</div>
				
			))}
			</ProjectsListWrapper>
		</ProjectsListContainer>
	)
}

export default ProjectsList;
