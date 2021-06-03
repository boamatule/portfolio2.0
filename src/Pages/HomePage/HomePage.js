import React, { useState } from 'react';
import { HomeInfo, Projects } from '../../components';
// import Projects from '../../components/Projects/Projects';
import ContactPage from '../ContactPage/ContactPage';
import PortfolioListPage from '../PortfolioPage/PortfolioListPage';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const HomePage = () => (
  <>
    <HomeInfo {...homeObjOne} />
    <HomeInfo {...homeObjTwo} />
    <HomeInfo {...homeObjThree} />
    <Projects />
    <HomeInfo {...homeObjFour} />
    {/* <PortfolioListPage />
    <ContactPage /> */}
  </>
);

export default HomePage;
