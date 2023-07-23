import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import About from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import Marginer from '../../components/marginer/marginer';

const HomePageContaner = styled.div`
/* ${tw`flex flex-col items-center w-full h-full overflow-x-hidden`} */
`;

const HomePage = () => {
  return (
    <HomePageContaner>
      <About />
      <Marginer direction="vertical" margin="2em" />
      <ProjectsList />
      <Marginer direction="vertical" margin="2em" />
      <ContactPage />
    </HomePageContaner>
  );
}
export default React.memo(HomePage);
