import React, { useState } from 'react';
import { HomeInfo, Profile } from '../../components';
import ContactPage from '../ContactPage/ContactPage';
import HomePageProject from '../HomePageProject/HomePageProject';
import PortfolioListPage from '../PortfolioPage/PortfolioListPage';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const HomePage = () => (
  <>
    <Profile />
    <PortfolioListPage />
    {/* <HomePageProject /> */}
  </>
);

export default HomePage;
