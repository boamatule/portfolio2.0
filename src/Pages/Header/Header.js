import React, { useState } from 'react'
import Dropdown from '../../routes/Dropdown/Dropdown';
import NavBar from '../../routes/Navigation/Navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
    </>
  );
}

export default Header;
