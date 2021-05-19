import React, { useState } from 'react';
import { HomeInfoSec } from '../../components/HomeInfo/HomeInfoStyles';
import { homeObjOne } from './Data';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SiderBar/SideBar';

// const HomePage = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <SideBar isOpen={isOpen} toggle={toggle} />
//       <NavBar toggle={toggle} />
//     </>
//   );
// };

// export default HomePage;

const HomePage = () => (
  <>
    <HomeInfoSec {...homeObjOne} />
  </>
);

export default HomePage;
