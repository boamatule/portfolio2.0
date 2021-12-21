/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
          {/* <ProjectDescription>{project.description}</ProjectDescription> */}
          <ProjectDescription>{project.stack}</ProjectDescription>

          {/* <CardTitle>{project.description}</CardTitle> */}
          {/* <Button>check me out</Button>
          <Button>Github</Button> */}
        </GlassmorphismContainer>
      ))}
    </CardContainer>
  </Container>
);

export default withRouter(ProjectsList);
