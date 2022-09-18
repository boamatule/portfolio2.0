import { Profile } from '../../components';
import PortfolioListPage from '../PortfolioPage/PortfolioListPage';
import { Container } from '../../global-styles';

const HomePage = () => (
  <Container>
    <Profile />
    <PortfolioListPage />
  </Container>
);

export default HomePage;
