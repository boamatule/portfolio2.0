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
            My Homepage
          </DropdownLink>
          <DropdownLink
            to="/projects"
            onClick={() => setClick(false)}
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