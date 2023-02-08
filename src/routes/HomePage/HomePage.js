import React from 'react';
import { Container } from '../../global-styles';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import About from '../../Pages/AboutPage/AboutPage';

import { HomePageWrapper } from './HomePageStyles';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <About />
      <ProjectsList />
    </HomePageWrapper>
  );
}

export default HomePage;
