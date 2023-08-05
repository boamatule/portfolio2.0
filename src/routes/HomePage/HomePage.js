import React from 'react';
import About from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import Marginer from '../../components/marginer/marginer';

const HomePage = () => {
  return (
    <>
      <About />
      {/* <Marginer direction="vertical" margin="1em" /> */}
      <ProjectsList />
      {/* <Marginer direction="vertical" margin="1em" /> */}
      <ContactPage />
    </>
  );
}
export default React.memo(HomePage);
