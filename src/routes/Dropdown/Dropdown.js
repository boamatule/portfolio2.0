import React from "react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownLink,
  DropdownMenu,
} from "./Dropdown.Styles";

const Dropdown = ({ toggle }) => {


  return (
    <DropdownContainer>
      <DropdownMenu>
        <DropdownItem>
          <DropdownLink
            to="/"
            onClick={toggle}
          >
            My Homepage
          </DropdownLink>
          <DropdownLink
            to="/projects"
            onClick={toggle}
          >
            My Portfolio
          </DropdownLink>
          <DropdownLink
            to="/about_me"
            onClick={toggle}
          >
            About Me
          </DropdownLink>
          <DropdownLink
            to="/contact_me"
            onClick={toggle}
          >
            Get In Touch
          </DropdownLink>
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
