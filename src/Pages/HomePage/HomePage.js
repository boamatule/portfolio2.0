import React, { useState } from 'react';
import { HomeInfo, Profile } from '../../components';
import ContactPage from '../ContactPage/ContactPage';
import PortfolioListPage from '../PortfolioPage/PortfolioListPage';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { Container } from '../../global-styles';

const HomePage = () => (
  <>
    <Profile />
    <PortfolioListPage />
  </>
);

export default HomePage;
