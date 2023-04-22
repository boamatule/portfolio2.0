import React from "react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownLink,
  DropdownMenu,
} from "./Dropdown.Styles";

const Dropdown = ({ onItemClick, toggle }) => {
  return (
    <DropdownContainer
      onClick={onItemClick}
    >
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
