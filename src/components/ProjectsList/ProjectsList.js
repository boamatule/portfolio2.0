import React, { useContext } from 'react';
import { ProjectsProvider, ProjectsContext } from '../../contexts/projects.context';

import { Button, Glass } from '../../global-styles';
import {
  Image,
  CardContainer,
  ButtonWrapper,
  Heading,
  ProjectDescription,
  Title,
  BoxStyled,
  Text,
  SubTitle,
  ProjectContainer,
} from './ProjectsListStyles';

const ProjectsList = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <ProjectsProvider>
      <ProjectContainer>
        <Heading>Projects</Heading>
        <SubTitle>
          A list of curated projects to showcase some of my tech stacks. Please, have a look below and check my{' '}
          <a
            style={{
              color: '#4568dc',
              fontSize: '14px',
              backgroundColor: 'transparent',
            }}
            href="https://github.com/boamatule"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            {' '}
            github profile
          </a>{' '}
          for more projects.
        </SubTitle>
        <CardContainer>
          {projects.map((project) => (
            <BoxStyled key={project.id} whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
              <Glass>
                <Image src={project.imageUrl} alt={project.alt} />
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
                        paddingLeft: '80px',
                        background: 'transparent',
                        border: 'none',
                        color: '#6969FB',
                      }}
                    >
                      <Text>Source Code</Text>
                    </Button>
                  </a>
                </ButtonWrapper>
              </Glass>
            </BoxStyled>
          ))}
        </CardContainer>
      </ProjectContainer>
    </ProjectsProvider>

  );
}

export default ProjectsList;
