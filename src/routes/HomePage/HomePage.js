import React, { useState } from 'react';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import About from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';

import { HomeContainer, HomeWrapper } from './HomePage.Styles';

const HomePage = () => {
  return (
    <HomeContainer>
      <About />
      <ProjectsList />
      <HomeWrapper>
        <ContactPage />
      </HomeWrapper>
    </HomeContainer>
  );
}

export default HomePage;
