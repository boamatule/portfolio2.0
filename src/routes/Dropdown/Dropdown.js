import React from "react";
import {
  DropdownCloseIcon,
  DropdownContainer,
  DropdownIcon,
  DropdownItem,
  DropdownLink,
  DropdownMenu,
} from "./Dropdown.Styles";

const Dropdown = ({ toggle, active }) => {

  const closeDropdown = () => {
    active(false)
  };

  return (
    <DropdownContainer isOpen={active}>
      <DropdownIcon
        onClick={closeDropdown}
      >
        <DropdownCloseIcon />
      </DropdownIcon>
      <DropdownMenu>
        <DropdownItem>
          <DropdownLink to="/"
            onClick={toggle}
          >
            Home
          </DropdownLink>
          <DropdownLink to="projects" onClick={toggle}>
            Portfolio
          </DropdownLink>
          <DropdownLink to="about_me" onClick={toggle}>
            About
          </DropdownLink>
          <DropdownLink to="contact_me" onClick={toggle}>
            Contact
          </DropdownLink>
        </DropdownItem>
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
