import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
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
  NavBtnLink,
} from './FooterStyles';

const Footer = () => (
  <FooterContainer>
    <WebsiteRights>
      Crafted using Reactjs, Nodejs and Styled Components &copy; {new Date().getFullYear()} Boa Matule
    </WebsiteRights>
    {/* <FooterWrapper>
      <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo to="/" />
          <WebsiteRights>
            Crafted using Reactjs, Nodejs and Styled Components &copy; {new Date().getFullYear()} Boa Matule
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.linkedin.com/in/boaventura-matule-2082b068/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </SocialIconLink>
            <SocialIconLink href="https://github.com/boamatule" target="_blank" aria-label="LinkedIn">
              <FaGithub />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/boaventura-matule-2082b068/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.linkedin.com/in/boaventura-matule-2082b068/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaInstagram />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapper>
      </SocialMedia>
      <NavBtnLink />
    </FooterWrapper> */}
  </FooterContainer>
);

export default Footer;
