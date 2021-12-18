import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'normalize.css';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import PortfolioListPage from './Pages/PortfolioPage/PortfolioListPage';
import ResumePage from './Pages/Resume/ResumePage';
import NotFound from './Pages/NotFoundPage/NotFound';
import { NavBar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';

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
    <Footer />
  </Router>
);

export default App;
