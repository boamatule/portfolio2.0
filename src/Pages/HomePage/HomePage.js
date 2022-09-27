import { Container } from '../../global-styles';
import PortfolioListPage from '../PortfolioPage/PortfolioListPage';
import { Profile } from '../../components';

const HomePage = () => (
  <Container>
    <Profile />
    <PortfolioListPage />
  </Container>
);

export default HomePage;
