import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { Copyright, FooterContainer, ScrollToTopButton, ScrollToTopContainer, ScrollToTopIcon, SocialLink, SocialLinks } from './Footer.Styles';

const Footer = () => {
  const currentDate = new Date().getFullYear();
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <Copyright>&copy; {currentDate} Boa Matule. All rights reserved.</Copyright>
      {/* <SocialLinks>
        <SocialLink href="https://www.linkedin.com/in/boa-matule-2082b068">
          <FaLinkedinIn />
        </SocialLink>
        <SocialLink href="https://github.com/boamatule">
          <FaGithub />
        </SocialLink>
      </SocialLinks> */}
      <ScrollToTopContainer>
        <ScrollToTopButton>
          <ScrollToTopIcon
            onClick={toggleHome}
          />
        </ScrollToTopButton>
      </ScrollToTopContainer>
    </FooterContainer>
  );
};

export default React.memo(Footer);
