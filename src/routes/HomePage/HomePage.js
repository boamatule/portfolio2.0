import React from 'react';
import About from '../../Pages/AboutPage/AboutPage';
import ContactPage from '../../Pages/ContactPage/ContactPage';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import { HomeContainer } from './HomePage.Styles';
import SkillsSet from '../../components/SkillsSet/SkillsSet';
import Banner from '../../components/Banner/Banner';

const HomePage = () => {
  return (
    <HomeContainer>
      {/* <Banner /> */}
      <About 
        style={{
          // width: '100vh',
          // height: '100vh',
          // margin: '20em 10em',
          // fontFamily: 'Rubik',
          // backgroundColor: 'transparent',
          // marginTop: '12em',
          // padding: '0em 0em',
        }}
        />
      <ProjectsList />
      <ContactPage />
      {/* <SkillsSet /> */}
    </HomeContainer>
  );
}
export default React.memo(HomePage);
