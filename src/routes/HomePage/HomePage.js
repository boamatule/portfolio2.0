import React, { lazy } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const About = lazy(() => import('../../Pages/AboutPage/AboutPage'));
const ContactPage = lazy(() => import('../../Pages/ContactPage/ContactPage'));
const ProjectsList = lazy(() => import('../../components/ProjectsList/ProjectsList'));

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
