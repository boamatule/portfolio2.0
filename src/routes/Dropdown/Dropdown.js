import React from "react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownLink,
  DropdownMenu,
} from "./Dropdown.Styles";

const Dropdown = ({ toggle, isOpen }) => {
  return (
    <DropdownContainer
      onClick={toggle} isOpen={isOpen}
    >
      <DropdownMenu onClick={toggle} isOpen={isOpen}>
        <DropdownItem>
          <DropdownLink to="/">
            My Homepage
          </DropdownLink>
          <DropdownLink to="projects">
            My Portfolio
          </DropdownLink>
          <DropdownLink to="about_me">
            About Me
          </DropdownLink>
          <DropdownLink to="contact_me">
            Get In Touch
          </DropdownLink>
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;


