import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'normalize.css';
import AboutPage from '../src/Pages/AboutPage/AboutPage';
import HomePage from '../src/Pages/HomePage/HomePage';
import ContactPage from '../src/Pages/ContactPage/ContactPage';
import PortfolioPage from '../src/Pages/PortfolioPage/PortfolioPage';
import PortfolioListPage from '../src/Pages/PortfolioPage/PortfolioListPage';
import ResumePage from '../src/Pages/Resume/ResumePage';
import NotFound from '../src/Pages/NotFoundPage/NotFound';
import { NavBar, Footer } from '../src/components';
import ScrollToTop from '../src/components/ScrollToTop';
// eslint-disable-next-line import/no-named-as-default

const App = () => (
  <Router>
    <ScrollToTop />
    <NavBar />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/portfolio/:name" component={PortfolioPage} />
      <Route path="/portfolio-list" component={PortfolioListPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
