import React, { useContext } from 'react';
import { ProjectsContext, ProjectsProvider } from '../../contexts/projects.context';
import { Button, Glass, Span } from '../../global-styles';

import {
  BoxStyled,
  ButtonWrapper,
  CardContainer,
  GithubLink,
  Heading,
  ProjectContainer,
  ProjectDescription,
  SubTitle,
  Text,
  Title,
  Image,
  ProjectBox,
  ProjectDetailsWrapper,
} from './ProjectsList.Styles';

const ProjectsList = () => {
  const { projects } = useContext(ProjectsContext);
  const hasShadow = true; // Set this based on your condition
  const darkTheme = true; // Set this based on your dark theme logic

  return (
    <ProjectsProvider>
      <ProjectContainer>
        <Heading>Selected Projects.</Heading>
        <SubTitle>
          A curated selection of projects that demonstrate my skills and expertise in various technologies and frameworks. Browse through the list below to get a glimpse of my portfolio. 
          <h1 />
          Please, don't forget to also check out my other work on my {' '}
          <GithubLink
            href="https://github.com/boamatule"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            {' '}
            GitHub
          </GithubLink>{' '}
          profile for more details.
        </SubTitle>
        <CardContainer>
          {projects.map((project) => (
            <ProjectBox key={project.id} 
            // whileHover={{ scale: 1.1, transition: { duration: 1 } }}
            >
                <Image src={project.imageUrl} alt={project.alt} />
                <ProjectDetailsWrapper>
                <Title>{project.title.toLowerCase()}</Title>
                <ProjectDescription>{project.stack}</ProjectDescription>
                <ButtonWrapper>
                  <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      small
                      fontSmall
                      primary
                      style={{
                        color: 'white',
                        size: '12px'
                      }}
                    >
                      <Text>See Live</Text>
                    </Button>
                  </a>
                  <a href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      small
                      fontSmall
                      primary
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#4568dc',
                        size: '12px'
                      }}
                    >
                      <Text>Source Code</Text>
                    </Button>
                  </a>
                </ButtonWrapper>
                </ProjectDetailsWrapper>
            </ProjectBox>
          ))}
        </CardContainer>
      </ProjectContainer>
    </ProjectsProvider>

  );
}

export default React.memo(ProjectsList);
