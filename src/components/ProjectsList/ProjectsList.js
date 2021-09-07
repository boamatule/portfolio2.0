/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaGlobeAfrica } from 'react-icons/fa';
import { Button, Container } from '../../global-styles';
import {
  ButtonLink,
  Meta,
  Card,
  Image,
  Entities,
  SubTitle,
  Title,
  ProjectWrapper,
  // ProjectContainer,
  Heading,
  buttonLabel,
} from './ProjectsListStyles';

<<<<<<< HEAD

const ProjectsList = ({ projects}) => {
	return (
		<ProjectsListContainer>
			<ProjectsListWrapper>
			{projects.map((project, key) => (
				<div key={key} to={`/project/${project.name}`}>
					<ProjectListCard>
						<ProjectListImage src={project.image}/>
						<ProjectListH2>
							{/* {project.title} */}
						</ProjectListH2>
						<ProjectListP >
						{project.description[0].substring(0, 150)}...
						</ProjectListP>
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
=======
const ProjectsList = ({ projects, lightBg, website, github, GitHub, buttonLabel }) => (
  <ProjectWrapper onMouseEnter>
    <Container lightBg={lightBg}>
      {/* <Heading>Bellow is some of my projects</Heading> */}
      <Entities>
        {projects.map((project, key) => (
          <Card key={key} to={`/project/${project.id}`}>
            <Image src={project.image} alt="" />
            <Meta>
              <Title>{project.title}</Title>
              <SubTitle>{project.stack}</SubTitle>
              <SubTitle>{project.description}</SubTitle>
            </Meta>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <a href={project.URL} target="_blank" rel="noreferrer">
                <Button small fontSmall primary>
                  website
                </Button>
                {/* <FaGlobeAfrica /> */}
              </a>
              <a href={project.GitHub} target="_blank" rel="noreferrer">
                <Button small fontSmall primary>
                  github
                </Button>
                {/* <FaGithub /> */}
              </a>
            </div>
          </Card>
        ))}
      </Entities>
    </Container>
  </ProjectWrapper>
);
>>>>>>> alternative-design

export default ProjectsList;
