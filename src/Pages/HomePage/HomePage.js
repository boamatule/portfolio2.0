import React, { useState } from 'react';
import { HomeInfo } from '../../components';
import { homeObjOne } from './Data';

const HomePage = () => (
  <>
    <HomeInfo {...homeObjOne} />
  </>
);

export default HomePage;
