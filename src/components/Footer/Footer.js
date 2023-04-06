import React from 'react';
import { animateScroll as scroll } from "react-scroll";

import {
  FooterContainer,
  FooterWrapper,
  Copyright,
  ScrollToTopContainer,
  ScrollToTopButton,
  ScrollToTopIcon,
} from './Footer.Styles';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterWrapper>
      <Copyright>©<span id="year">2023</span>&nbsp; Boa Matule. All rights reserved.</Copyright>
      <ScrollToTopContainer>
        <ScrollToTopButton>
          <ScrollToTopIcon
            onClick={toggleHome}
          />
        </ScrollToTopButton>
      </ScrollToTopContainer>
    </FooterWrapper>
  );
}

export default Footer;