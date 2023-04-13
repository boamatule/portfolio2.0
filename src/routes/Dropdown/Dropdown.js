import React from "react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownLink,
  DropdownMenu,
} from "./Dropdown.Styles";

const Dropdown = ({ toggle, active }) => {
  return (
    <DropdownContainer isOpen={active}>
      <DropdownMenu onClick={toggle}>
        <DropdownItem>
          <DropdownLink to="/">
            Home
          </DropdownLink>
          <DropdownLink to="projects">
            Portfolio
          </DropdownLink>
          <DropdownLink to="about_me">
            About
          </DropdownLink>
          <DropdownLink to="contact_me">
            Contact
          </DropdownLink>
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;


