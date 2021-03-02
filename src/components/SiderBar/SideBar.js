import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SideBarWrapper,
	SideBarMenu,
	SideBarRouter,
	SocialIcons,
	SocialIconLink,
} from './SideBarStyles';

const SideBar = ({ isOpen, toggle }) => {
	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SideBarWrapper>
				<SideBarMenu>
					<SideBarRouter to="/about" onClick={toggle}>
						about
					</SideBarRouter>
					<SideBarRouter to="/portfolio" onClick={toggle}>
						portfolio
						</SideBarRouter>
					<SideBarRouter to="/resume" onClick={toggle}>
						resume
						</SideBarRouter>
					<SideBarRouter to="/contact" onClick={toggle}>
						contact
						</SideBarRouter>
					<SideBarRouter>
						<SocialIcons>
							<SocialIconLink href="https://www.linkedin.com/in/boaventura-matule-2082b068/" target="_blank" aria-label="LinkedIn">
								<FaLinkedinIn />
							</SocialIconLink>
							<SocialIconLink href="https://github.com/boamatule" target="_blank" aria-label="LinkedIn">
								<FaGithub />
							</SocialIconLink>
						</SocialIcons>
					</SideBarRouter>
				</SideBarMenu>
			</SideBarWrapper>
		</SideBarContainer>
	);
};

export default SideBar;
