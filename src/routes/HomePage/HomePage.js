import React from 'react';
import About from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import { HomeContainer } from './HomePage.Styles';
import SkillsSet from '../../components/SkillsSet/SkillsSet';

const HomePage = () => {
  return (
    <HomeContainer>
      <About />
      <ProjectsList />
      <ContactPage />
      {/* <SkillsSet /> */}
    </HomeContainer>
  );
}
export default React.memo(HomePage);
