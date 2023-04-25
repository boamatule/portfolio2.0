import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  DropdownContainer,
  DropdownItem,
  DropdownLink,
  DropdownMenu,
  DropdownMobileIcon
} from "./Dropdown.Styles";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <DropdownContainer onClick={handleClick}>
      <DropdownMobileIcon>
        {click ? (
          <FaTimes
            style={{
              width: '24px',
              height: '24px',
              color: '#6969FB',
              background: 'none',
            }}
          />
        ) : (
          <FaBars
            style={{
              width: '24px',
              height: '24px',
              color: '#6969FB',
              background: 'none',
            }}
          />
        )}
      </DropdownMobileIcon>
      <DropdownMenu>
        <DropdownItem>
          <DropdownLink
            to="/"
          >
            My Homepage
          </DropdownLink>
          <DropdownLink
            to="/projects"
          >
            My Portfolio
          </DropdownLink>
          <DropdownLink
            to="/about_me"
          >
            About Me
          </DropdownLink>
          <DropdownLink
            to="/contact_me"
          >
            Get In Touch
          </DropdownLink>
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;



// const toggle = () => {
//   console.log("Toggle love");
//   if (window.innerWidth <= 960) {
//     setIsOpen(!isOpen); // Update isOpen to its opposite value
//   } else {
//     setIsOpen(false);
//   }
// };

// const handleItemClick = () => {
//   setIsOpen(false); // Update isOpen to false when any dropdown item is clicked
// };

// const handleKeyPress = (event) => {
//   if (event.key === 'Enter' || event.key === ' ') {
//     console.log("What's up?");
//     toggle();
//   }
// };
// const handleKeyDown = (event) => {
//   if (event.key === "Enter") {
//     console.log("handleKeyDown called");
//     toggle();
//   }
// };


{/* <MobileIconContainer
                onClick={toggle}
                onKeyPress={handleKeyPress}
                handleKeyDown={handleKeyDown}
                tabIndex={0}
              >
                {isOpen ? (
                  <FaTimes
                    style={{
                      width: '26px',
                      height: '26px',
                      color: ' #4568dc',
                      background: 'none',
                    }}
                  />
                ) : (
                  <FaBarsIcon
                    style={{
                      width: '26px',
                      height: '26px',
                      color: ' #4568dc',
                      background: 'none',
                    }}
                  />
                )}
              </MobileIconContainer> */}


                // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton)
  // const changeNav = () => {
  //   if (window.scrollY <= 80) {
  //     setScrollNav(true);
  //   } else {
  //     setScrollNav(false);
  //   }
  // };