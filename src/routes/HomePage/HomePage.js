import React from 'react';
import About from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

import {
  Border,
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
      {/* <Border /> */}
    </>
  );
}

export default HomePage;
