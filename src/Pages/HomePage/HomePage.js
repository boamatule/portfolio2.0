import React, { useState } from 'react';
import { HomeInfo } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const HomePage = () => (
  <>
    <HomeInfo {...homeObjOne} />
    <HomeInfo {...homeObjTwo} />
    <HomeInfo {...homeObjThree} />
    <HomeInfo {...homeObjFour} />
  </>
);

export default HomePage;
