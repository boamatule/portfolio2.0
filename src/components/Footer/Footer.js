import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Container } from '../../global-styles';
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
  <FooterWrapper>
    <Container>
      {/* <WebsiteRights>Crafted with ♥ using Reactjs, Nodejs and Styled Components.</WebsiteRights> */}
      <SocialMediaWrapper>
        <SocialIcons>
          <SocialIconLink
            href="https://www.linkedin.com/in/boaventura-matule-2082b068/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </SocialIconLink>
          <SocialIconLink href="https://github.com/boamatule" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaGithub />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrapper>
      <Copyright>&copy; {new Date().getFullYear()} Boa Matule</Copyright>
    </Container>
  </FooterWrapper>
);

export default Footer;
