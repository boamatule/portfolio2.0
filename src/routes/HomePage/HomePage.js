import React from 'react';
import About from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

import {
  HomeContainer,
  ProjectsListContainer
} from './HomePage.Styles';

const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <About />
        <ProjectsListContainer>
          <ProjectsList />
        </ProjectsListContainer>
        <ContactPage />
      </HomeContainer>
    </>
  );
}

export default HomePage;
