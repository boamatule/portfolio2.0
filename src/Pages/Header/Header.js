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
      <NavBar isOpen={isOpen} toggle={toggle} />
    </>
  );
}

export default Header;



// import React, { useState, useEffect} from 'react'
// import Dropdown from '../../routes/Dropdown/Dropdown';
// import NavBar from '../../routes/Navigation/Navigation';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const setResponsiveness = () => {
//       return window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
//     };

//     setResponsiveness();

//     window.addEventListener("resize", () => setResponsiveness());
//   }, []);

//   return isMobile ? (
//     <Dropdown isOpen={isOpen} toggle={toggle} />
//   ) : (
//     <NavBar />
//   );
// };
// export default Header;

