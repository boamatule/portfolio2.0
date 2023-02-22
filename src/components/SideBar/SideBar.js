import React from "react";

import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SideBarWrapper,
	SideBarMenu,
	SideBarLink,
} from "./SideBar.styles";

const SideBar = () => {
	return (
		<SideBarContainer>
			<Icon>
				{/* <CloseIcon /> */}
			</Icon>
			<SideBarWrapper>
				<SideBarMenu>
					<SideBarLink to="">home</SideBarLink>
					<SideBarLink to="">portfolio</SideBarLink>
					<SideBarLink to="">about</SideBarLink>
					<SideBarLink to="">contact</SideBarLink>
				</SideBarMenu>
			</SideBarWrapper>
		</SideBarContainer>
	);
};

export default SideBar;
