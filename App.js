/* eslint-disable import/no-unresolved */
import { React, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'normalize.css';
// import AboutPage from '../src/Pages/AboutPage/AboutPage';
// import HomePage from '../src/Pages/HomePage/HomePage';
// import ContactPage from '../src/Pages/ContactPage/ContactPage';
// import PortfolioPage from '../src/Pages/PortfolioPage/PortfolioPage';
// import PortfolioListPage from '../src/Pages/PortfolioPage/PortfolioListPage';
// eslint-disable-next-line import/no-unresolved
import ResumePage from '../src/Pages/Resume/ResumePage';
import NotFound from '../src/Pages/NotFoundPage/NotFound';
// import { NavBar, Footer } from '../src/components';
// import ScrollToTop from '../src/components/ScrollToTop';
import WithSpinner from './src/components/with-spinner/with-spinner.component';
// eslint-disable-next-line import/no-named-as-default

const HomePage = lazy(() => import('../src/Pages/HomePage/HomePage'));
const ContactPage = lazy(() => import('../src/Pages/ContactPage/ContactPage'));
const NavBar = lazy(() => import('../src/components'));
const ScrollToTop = lazy(() => import('../src/components/ScrollToTop'));
const AboutPage = lazy(() => import('../src/Pages/AboutPage/AboutPage'));
const PortfolioPage = lazy(() => import('../src/Pages/PortfolioPage/PortfolioPage'));
const PortfolioListPage = lazy(() => import('../src/Pages/PortfolioPage/PortfolioListPage'));

const App = () => (
  <Suspense fallback={<WithSpinner />}>
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
  </Suspense>
);

export default App;
