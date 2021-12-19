/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

// import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaGlobeAfrica } from 'react-icons/fa';
import { Button, Container } from '../../global-styles';
import { Image, CardContainer, GlassmorphismContainer, ButtonWrapperLink, Card, Span } from './ProjectsListStyles';

const ProjectsList = ({ projects }) => (
  <Container>
    <CardContainer>
      {projects.map((project, key) => (
        <GlassmorphismContainer key={key} to={`/project/${project.id}`}>
          <Image src={project.imageUrl} />
          <Card>
            <ButtonWrapperLink>
              {/* <Button>{project.stack}</Button>
              <Button>{project.stack1}</Button>
              <Button>{project.stack2}</Button>
              <Button>{project.stack3}</Button> */}
            </ButtonWrapperLink>
          </Card>
        </GlassmorphismContainer>
      ))}
    </CardContainer>
  </Container>
);

export default withRouter(ProjectsList);
