import React from 'react';
import {
	FooterContainer,
	FooterWrapper,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLink,
	FooterLinkTitle,
	SocialIcons,
	SocialIconLink,
	WebsiteRights,
	SocialLogo,
	SocialMediaWrapper,
	SocialMedia,
	NavBtnLink
} from './FooterStyles';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';



const Footer = () => {
	return (
		<FooterContainer>
		<FooterWrapper>
			<SocialMedia>
				<SocialMediaWrapper>
					<SocialLogo to='/'>
					</SocialLogo>
					<WebsiteRights>
						Crafted using Reactjs and Nodejs	&copy; {new Date().getFullYear()} Boa Matule
					</WebsiteRights>
					{/* <SocialIcons>
						<SocialIconLink href="https://www.linkedin.com/in/boaventura-matule-2082b068/" target="_blank" aria-label="LinkedIn">
							<FaLinkedinIn />
						</SocialIconLink>
						<SocialIconLink href="https://github.com/boamatule" target="_blank" aria-label="LinkedIn">
							<FaGithub />
						</SocialIconLink>
						<SocialIconLink href="https://www.linkedin.com/in/boaventura-matule-2082b068/" target="_blank" aria-label="LinkedIn">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="https://www.linkedin.com/in/boaventura-matule-2082b068/" target="_blank" aria-label="LinkedIn">
							<FaInstagram />
						</SocialIconLink>
					</SocialIcons> */}
				</SocialMediaWrapper>
			</SocialMedia>
			{/* <NavBtnLink></NavBtnLink> */}
		</FooterWrapper>
	</FooterContainer>

	
	)
}

export default Footer;
