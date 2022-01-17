/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Glassmorphism } from '../../global-styles';
import {
  Image,
  CardContainer,
  ButtonWrapperLink,
  Heading,
  ProjectDescription,
  Title,
  BoxStyled,
  ButtonText,
} from './ProjectsListStyles';

const ProjectsList = ({ projects }) => (
  <>
    <Heading>p o r t f o l i o</Heading>

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
                    // margin: '0px 0px 0px 40px',
                    color: 'white',
                  }}
                >
                  <ButtonText>See Live</ButtonText>
                </Button>
              </a>

              <a href={project.sourceCodeUrl} target="_blank" rel="noreferrer">
                <Button
                  small
                  fontSmall
                  primary
                  style={{
                    margin: '0px 0px 0px 20px',
                    background: 'transparent',
                    border: 'none',
                    color: '#6969FB',
                  }}
                >
                  <ButtonText>Source Code</ButtonText>
                </Button>
              </a>
            </ButtonWrapperLink>
          </Glassmorphism>
        </BoxStyled>
      ))}
    </CardContainer>
  </>
);
export default withRouter(ProjectsList);
