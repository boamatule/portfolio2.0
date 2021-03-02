import React from 'react';
import { FaGithub, FaLinkedinIn, FaBars } from 'react-icons/fa';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobilIcon,
	NavLinks,
	NavItem,
	NavMenu,
	NavBtn,
	NavBtnLink,
	SocialIcons,
	SocialIconLink,
} from './NavBarStyles';

const NavBar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>Boa Matule</NavLogo>
					<MobilIcon onClick={toggle}>
						<FaBars />
					</MobilIcon>
					<NavMenu>
						<NavItem>
							<NavLinks to="/about">about</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/portfolio-list">portfolio</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/resume">resume</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/contact">contact</NavLinks>
						</NavItem>
					</NavMenu>

					<SocialIcons>
						<SocialIconLink href="https://www.linkedin.com/in/boaventura-matule-2082b068/" target="_blank" aria-label="LinkedIn">
							<FaLinkedinIn />
						</SocialIconLink>
						<SocialIconLink href="https://github.com/boamatule" target="_blank" aria-label="LinkedIn">
							<FaGithub />
						</SocialIconLink>
					</SocialIcons>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default NavBar;
