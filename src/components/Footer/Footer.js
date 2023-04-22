import React from 'react';
import { animateScroll as scroll } from "react-scroll";

import {
  Copyright,
  FooterWrapper,
  ScrollToTopButton,
  ScrollToTopContainer,
  ScrollToTopIcon,
} from './Footer.Styles';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterWrapper>
      <Copyright>©&nbsp;Boa Matule <span id="year">2023</span></Copyright>
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