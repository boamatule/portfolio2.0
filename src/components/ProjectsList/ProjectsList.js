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
      <Heading>Bellow is some of my projects</Heading>
      <Entities>
        {projects.map((project, key) => (
          <Card key={key} to={`/project/${project.id}`}>
            <Image src={project.image} alt="" />
            <Meta>
              <Title>{project.title}</Title>
              <SubTitle>{project.description}</SubTitle>
            </Meta>
            <div
              style={{
                padding: '10px 80px',
                display: 'flex',
                textAlign: 'center',
                // alignItems: 'center',
                outline: '0',
                justifyContent: 'center',
              }}
            >
              <a href={project.URL} target="_blank" rel="noreferrer">
                <Button primary>website</Button>
              </a>
              <a
                style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}
                href={project.GitHub}
                target="_blank"
                rel="noreferrer"
              >
                <Button style={{ textAlign: 'center', justifyContent: 'center' }} primary>
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
