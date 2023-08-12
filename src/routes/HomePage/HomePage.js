import React from 'react';
import About from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

const HomePage = () => {
  return (
    <>
      <About />
      <ProjectsList />
      <ContactPage />
    </>
  );
}
export default React.memo(HomePage);
