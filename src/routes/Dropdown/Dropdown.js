import React from "react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownLink,
  DropdownMenu
} from "./Dropdown.Styles";

const Dropdown = ({ setClick, handleClick, closeMobileMenu}) => {
  return (
    <DropdownContainer >
      <DropdownMenu
      // onClick={handleClick}
      // handleLinkClick={handleLinkClick}
      >
        <DropdownItem
          // onClick={handleClick}
          // handleLinkClick={handleLinkClick}
        >
          <DropdownLink
            to="/"
            // onClick={() => setClick(false)}
            onClick={closeMobileMenu}

          >
            My Homepage
          </DropdownLink>
          <DropdownLink
            to="/projects"
            // onClick={() => setClick(false)}
            onClick={closeMobileMenu}

          >
            My Portfolio
          </DropdownLink>
          <DropdownLink
            to="/about_me"
            onClick={() => setClick(false)}
          >
            About Me
          </DropdownLink>
          <DropdownLink
            to="/contact_me"
            onClick={() => setClick(false)}
          >
            Get In Touch
          </DropdownLink>
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;