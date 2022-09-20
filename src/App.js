import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'normalize.css';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import PortfolioListPage from './Pages/PortfolioPage/PortfolioListPage';
import SuccessPage from './Pages/SuccessPage/SuccessPage';
import NotFound from './Pages/NotFoundPage/NotFound';
import { NavBar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';
// eslint-disable-next-line import/no-named-as-default

const App = () => (
  <Router>
    <ScrollToTop />
    <NavBar />
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/home" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/portfolio-list" component={PortfolioListPage} />
      <Route path="/message-sent-successfully" component={SuccessPage} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
