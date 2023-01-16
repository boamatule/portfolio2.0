import React from 'react';
import { Container } from '../../global-styles';
import PortfolioListPage from '../../Pages/PortfolioPage/PortfolioListPage';
import Profile from '../../components/Profile/Profile';

function HomePage() {
  return (
    <Container>
      <Profile />
      <PortfolioListPage />
    </Container>
  );
}

export default HomePage;
