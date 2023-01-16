/* eslint-disable react/function-component-definition */
import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { string } from 'prop-types';
import { ProjectsContext } from '../../contexts/projects.context';
import { Container, Button, Glassmorphism } from '../../global-styles';
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
    <Container>
      <ProjectContainer>
        <Heading>Curated projects</Heading>
        <SubTitle>
          A list of curated projects to showcase some of my tech stacks. Please, have a look below and check my{' '}
          <a
            style={{
              color: '#6969FB',
              backgroundColor: 'transparent',
            }}
            href="https://github.com/boamatule"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            {' '}
            github profile
          </a>{' '}
          for more projects.
        </SubTitle>
      </ProjectContainer>
      <CardContainer>
        {projects.map((project) => (
          <BoxStyled key={project.id} whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
            <Glassmorphism>
              <Image src={project.imageUrl} alt={project.alt} />
              <Title>{project.title.toLowerCase()}</Title>
              <ProjectDescription>{project.stack}</ProjectDescription>
              {/* <ProjectDescription>{project.description}</ProjectDescription> */}

              <ButtonWrapper>
                <a href={project.deployedUrl} target="_blank" rel="noreferrer">
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

                <a href={project.sourceCodeUrl} target="_blank" rel="noreferrer">
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
            </Glassmorphism>
          </BoxStyled>
        ))}
      </CardContainer>
    </Container>
  );
};

export default ProjectsList;
