/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';

// import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaGlobeAfrica } from 'react-icons/fa';
import { Button, Container } from '../../global-styles';
import {
  Image,
  CardContainer,
  GlassmorphismContainer,
  ButtonWrapperLink,
  CardTitle,
  Heading,
  ProjectDescription,
  Title,
  ButtonWrapperLinkText,
  Span,
} from './ProjectsListStyles';

const ProjectsList = ({ projects }) => (
  <Container>
    <Heading>Portfolio.</Heading>
    <CardTitle>
      Please, check out some of my curated projects built using the lastet tech stack in the industry.
    </CardTitle>
    <CardContainer>
      {projects.map((project, key) => (
        <GlassmorphismContainer key={key} to={`/project/${project.id}`}>
          <Image src={project.imageUrl} />
          <Title>{project.title}</Title>
          <ProjectDescription>{project.stack}</ProjectDescription>
          <ButtonWrapperLink>
            <Button
              style={{
                margin: '10px',
                color: 'silver',
              }}
            >
              <Span>SEE LIVE</Span>
            </Button>
            <Button
              style={{
                margin: '10px',
                background: 'transparent',
                border: 'none',
                color: 'silver',
                transition: 'all 0.3s ease-out',
              }}
            >
              <Span>SOURCE CODE</Span>
            </Button>
          </ButtonWrapperLink>
        </GlassmorphismContainer>
      ))}
    </CardContainer>
  </Container>
);

export default withRouter(ProjectsList);
