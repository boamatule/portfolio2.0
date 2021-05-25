/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../global-styles';
import {
  Wrapper,
  ButtonLink,
  Meta,
  Card,
  Image,
  Entities,
  SubTitle,
  H1,
  Title,
  ProjectWrapper,
} from './ProjectsListStyles';

const ProjectsList = ({ projects, lightBg }) => (
  <ProjectWrapper>
    <Container lightBg={lightBg}>
      <Title>Curated projects using different tech stack</Title>
      <Entities>
        {projects.map((project, key) => (
          <Card key={key} to={`/project/${project.name}`}>
            <Image src={project.image} />
            <Meta>
              {/* <Title>{project.title}</Title> */}
              <SubTitle>{project.title}</SubTitle>
            </Meta>
          </Card>
        ))}
      </Entities>
    </Container>
  </ProjectWrapper>
);

export default ProjectsList;
