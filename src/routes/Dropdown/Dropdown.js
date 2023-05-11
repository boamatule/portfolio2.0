import React from "react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownLink,
  DropdownMenu
} from "./Dropdown.Styles";

const Dropdown = ({ setClick }) => {
  return (
    <DropdownContainer >
      <DropdownMenu>
        <DropdownItem>
          <DropdownLink
            to="/"
            onClick={() => setClick(false)}
          >
            Home
          </DropdownLink>
          <DropdownLink
            to="/projects"
            onClick={() => setClick(false)}
          >
            Portfolio
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
            Contact me
          </DropdownLink>
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;