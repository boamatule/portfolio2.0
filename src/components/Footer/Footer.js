import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterWrapper } from './FooterStyles';

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Link to="/" style={{ color: '#6969FB', fontSize: '16px', lineHeight: '1.75rem' }}>
        ← Back to home
      </Link>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
