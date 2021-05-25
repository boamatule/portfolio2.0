import React, { useState } from 'react';
import { HomeInfo } from '../../components';
import ContactPage from '../ContactPage/ContactPage';
import PortfolioListPage from '../PortfolioPage/PortfolioListPage';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const HomePage = () => (
  <>
    <HomeInfo {...homeObjOne} />
    <HomeInfo {...homeObjTwo} />
    <HomeInfo {...homeObjThree} />
    <HomeInfo {...homeObjFour} />
    {/* <PortfolioListPage />
    <ContactPage /> */}
  </>
);

export default HomePage;
