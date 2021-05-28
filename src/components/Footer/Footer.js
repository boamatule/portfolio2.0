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
  Copyright,
} from './FooterStyles';

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <WebsiteRights>Crafted with ♥ using Reactjs, Nodejs and Styled Components.</WebsiteRights>
      <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo to="/" />
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
      <Copyright>&copy; {new Date().getFullYear()} Boa Matule</Copyright>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
