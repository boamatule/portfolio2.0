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
    <FooterContainer>
      <Copyright>©2022&nbsp; Boa Matule. All rights reserved.</Copyright>
      <ScrollToTopContainer>
        <ScrollToTopButton>
          <ScrollToTopIcon
            onClick={toggleHome}
          />
        </ScrollToTopButton>
      </ScrollToTopContainer>
    </FooterContainer>
  );
}

export default Footer;