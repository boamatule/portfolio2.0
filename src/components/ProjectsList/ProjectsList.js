/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Container, Span, Glassmorphism } from '../../global-styles';
import {
  Image,
  CardContainer,
  ButtonWrapperLink,
  CardTitle,
  Heading,
  ProjectDescription,
  Title,
  CardTitleWrapper,
} from './ProjectsListStyles';

const ProjectsList = ({ projects }) => (
  <Container>
    <Heading>| 03 : p o r t f o l i o |</Heading>

    {/* <CardTitleWrapper>
      <Glassmorphism>
        <CardTitle>
          Please, check out some of my curated projects built using the lastet tech stack in the industry.
        </CardTitle>
      </Glassmorphism>
    </CardTitleWrapper> */}

    <CardContainer>
      {projects.map((project, key) => (
        <Glassmorphism key={key} to={`/project/${project.id}`}>
          <Image src={project.imageUrl} alt={project.alt} />
          <Title>{project.title}</Title>
          <ProjectDescription>{project.stack}</ProjectDescription>
          <ButtonWrapperLink>
            <a href={project.URL} target="_blank" rel="noreferrer">
              <Button
                small
                fontSmall
                primary
                style={{
                  margin: '10px',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                <Span>See Live</Span>
              </Button>
            </a>
            <a href={project.GitHub} target="_blank" rel="noreferrer">
              <Button
                small
                fontSmall
                primary
                style={{
                  margin: '10px',
                  background: 'transparent',
                  border: 'none',
                  color: 'grey',
                  transition: 'all 0.3s ease-out',
                }}
              >
                <Span>Source Code</Span>
              </Button>
            </a>
          </ButtonWrapperLink>
        </Glassmorphism>
      ))}
    </CardContainer>
  </Container>
);

export default withRouter(ProjectsList);
