import React from 'react';
import { Container } from '../../global-styles';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import About from '../../Pages/AboutPage/AboutPage';


function HomePage() {
  return (
    <Container>
      <About />
      <ProjectsList />
    </Container>
  );
}
export default HomePage;
