import React, { useContext } from 'react';
import { ProjectsContext, ProjectsProvider } from '../../contexts/projects.context';

import { Button, Glass } from '../../global-styles';
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
  Title
} from './ProjectsList.Styles';
import OptimizedBlurhasImage from '../../OptimizedBlurhasImage';

const ProjectsList = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <ProjectsProvider>
      <ProjectContainer>
        <Heading>Projects</Heading>
        <SubTitle>
          A list of selected projects to showcase some of my tech stacks.
          Please, do have a look below and also check my {' '}
          <GithubLink
            href="https://github.com/boamatule"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            {' '}
            GitHub
          </GithubLink>{' '}
          profile for more details
        </SubTitle>
        <CardContainer>
          {projects.map((project) => (
            <BoxStyled key={project.id} whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
              <Glass>
                <OptimizedBlurhasImage />
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

export default React.memo(ProjectsList);
