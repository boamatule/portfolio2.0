import React, { lazy } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const About = lazy(() => import('../../Pages/AboutPage/AboutPage'));
const ContactPage = lazy(() => import('../../Pages/ContactPage/ContactPage'));
const ProjectsList = lazy(() => import('../../components/ProjectsList/ProjectsList'));


const HomePageWrapper = styled.div`
  /* ${tw`flex flex-col items-center justify-center w-full h-full mx-auto max-w-screen-2xl`} */
`;
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
