import React from 'react';
import { Container } from '../../global-styles';
import Profile from '../../components/Profile/Profile';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

function HomePage() {
  return (
    <Container>
      <Profile />
      <ProjectsList />
    </Container>
  );
}
export default HomePage;
