/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';

import { Button, Glassmorphism } from '../../global-styles';
import {
  Image,
  CardContainer,
  ButtonWrapper,
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
            <ButtonWrapper
              style={
                {
                  // padding: '0px 10px 10px 0px',
                  // padding: '40px',
                }
              }
            >
              <a href="/project/URL" target="_blank" rel="noreferrer">
                <Button
                  small
                  fontSmall
                  primary
                  style={{
                    color: 'white',
                    margin: '40px',
                  }}
                >
                  <ButtonText>See Live</ButtonText>
                </Button>
              </a>

              <a href="/project/sourceCodeUrl" target="_blank" rel="noreferrer">
                <Button
                  small
                  fontSmall
                  primary
                  style={{
                    marginLeft: '40px',
                    background: 'transparent',
                    border: 'none',
                    color: '#6969FB',
                  }}
                >
                  <ButtonText>Source Code</ButtonText>
                </Button>
              </a>
            </ButtonWrapper>
          </Glassmorphism>
        </BoxStyled>
      ))}
    </CardContainer>
  </>
);
export default withRouter(ProjectsList);
