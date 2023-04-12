import React from 'react';
import About from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import SuccessPage from '../SuccessPage/SuccessPage';
import {
  HomeContainer
} from './HomePage.Styles';

const HomePage = () => {
  return (
    <HomeContainer>
      <About />
      <ProjectsList />
      <ContactPage />
      <SuccessPage />
    </HomeContainer>
  );
}

export default HomePage;
