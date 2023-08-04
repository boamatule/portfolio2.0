import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import { Copyright, FooterContainer, ScrollToTopButton, ScrollToTopContainer, ScrollToTopIcon } from './Footer.Styles';

const Footer = () => {
  const currentDate = new Date().getFullYear();

  const toggleHome = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true,
    });
  };

  return (
    <FooterContainer>
      <Copyright>&copy; {currentDate} Boa Matule. All rights reserved.</Copyright>
      <ScrollToTopContainer>
        <ScrollToTopButton>
          <ScrollToTopIcon onClick={toggleHome} />
        </ScrollToTopButton>
      </ScrollToTopContainer>
    </FooterContainer>
  );
};

export default React.memo(Footer);
