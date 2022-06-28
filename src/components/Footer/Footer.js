import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterWrapper } from './FooterStyles';

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Link to="/" style={{ color: '#6969FB' }}>
        ← Back to home
      </Link>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
