import React, { useState } from 'react';
import Dropdown from '../../routes/Dropdown/Dropdown';
import NavBar from '../../routes/Navigation/Navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar 
      toggle={toggle} 
      // style={{ display: window.innerWidth > 768 ? 'block' : 'none' }} 
      />
      {
        isOpen && <Dropdown
          toggle={toggle}
          active={setIsOpen}
          />
      }
    </>
  );
};

export default Header;
