import React from 'react';
import { Container } from '../../global-styles';
import PortfolioListPage from '../PortfolioPage/PortfolioListPage';
import { Profile } from '../../components';

function HomePage() {
  return (
    <Container>
      <Profile />
      <PortfolioListPage />
    </Container>
  );
}

export default HomePage;
