import React from "react";

import {
	DropdownContainer,
	DropdownIcon,
	DropdownCloseIcon,
	DropdownWrapper,
	DropdownMenu,
	DropdownLink,
} from './Dropdown.Styles'

const Dropdown = ({ isOpen, toggle }) => {
	return (
	<DropdownContainer isOpen={isOpen} onClick={toggle}>
		<DropdownIcon onClick={toggle}>
			<DropdownCloseIcon />
		</DropdownIcon>
		<DropdownWrapper>
				<DropdownMenu>
					<DropdownLink to="/" onClick={toggle}>Home</DropdownLink>
					<DropdownLink to="curated_projects" onClick={toggle}>Portfolio</DropdownLink>
					<DropdownLink to="about_me" onClick={toggle}>About</DropdownLink>
					<DropdownLink to="contact_me" onClick={toggle}>Contact</DropdownLink>
				</DropdownMenu>
			</DropdownWrapper>
		</DropdownContainer>
	);
};

export default Dropdown;
