/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { motion } from 'framer-motion';

import { Button, Container, Span, Glassmorphism } from '../../global-styles';
import {
  Image,
  CardContainer,
  ButtonWrapperLink,
  Heading,
  ProjectDescription,
  Title,
  ProjectLinks,
  BoxStyled,
} from './ProjectsListStyles';

const ProjectsList = ({ projects }) => (
  <Container>
    <Heading>| 03 : p o r t f o l i o |</Heading>

    <CardContainer>
      {projects.map((project, key) => (
        <BoxStyled whileHover={{ scale: 1.1, transition: { duration: 1 } }}>
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
              <ProjectLinks href={project.sourceCodeUrl} target="_blank" rel="noreferrer">
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
                  <Span>
                    Source Code
                    {/* <FaGithub style={{ width: '28px', height: '28px' }} /> */}
                  </Span>
                </Button>
              </ProjectLinks>
            </ButtonWrapperLink>
          </Glassmorphism>
        </BoxStyled>
      ))}
    </CardContainer>
  </Container>
);
export default withRouter(ProjectsList);
