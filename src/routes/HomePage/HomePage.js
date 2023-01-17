import React from 'react';
import { Container } from '../../global-styles';
import PortfolioListPage from '../../Pages/PortfolioPage/PortfolioListPage';
import Profile from '../../components/Profile/Profile';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

function HomePage() {
  return (
    <Container>
      <Profile />
      <ProjectsList />
      {/* <PortfolioListPage /> */}
    </Container>
  );
}
export default HomePage;
