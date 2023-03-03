import React, { useState } from 'react';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import About from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';

import { HomeContainer, HomeWrapper, ProjectsListContainer, Moon } from './HomePage.Styles';

const HomePage = () => {
  return (
    <HomeContainer>
      <About />
      <ProjectsListContainer>
        <ProjectsList />
      </ProjectsListContainer>
      <ContactPage />
    </HomeContainer>
  );
}

export default HomePage;
