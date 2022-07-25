import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterWrapper } from './FooterStyles';

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Link to="/" style={{ color: '#6969FB', fontSize: '16px', lineHeight: '1.75rem' }}>
        ← Back to home
      </Link>
      {/* <h1>©2022 Boa Matule. All rights reserved.</h1> */}
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
