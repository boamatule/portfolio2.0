/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Button, Container } from '../../global-styles';
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
  CardMenu,
  CardItem,
  Heading,
} from './ProjectsListStyles';

const ProjectsList = ({ projects, lightBg }) => (
  <ProjectWrapper onMouseEnter>
    <Container lightBg={lightBg}>
      <Heading>Some of the projects built during my Bootcamp</Heading>
      <Entities>
        {projects.map((project, key) => (
          <Card key={key} to={`/project/${project.id}`}>
            <Image src={project.image} alt="" />
            <Meta>
              <Title>{project.title}</Title>
              <SubTitle>{project.description}</SubTitle>
            </Meta>
            <div style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', outline: '0' }}>
              <a href={project.URL} target="_blank" rel="noreferrer">
                <Button style={{ margin: '0px 30px' }} primary>
                  website
                </Button>
              </a>
              <a href={project.GitHub} target="_blank" rel="noreferrer">
                <Button style={{}} primary>
                  github
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </Entities>
    </Container>
  </ProjectWrapper>
);

export default ProjectsList;
