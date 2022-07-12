/* eslint-disable import/no-unresolved */
import { React, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'normalize.css';
import ResumePage from '../src/Pages/Resume/ResumePage';
import NotFound from '../src/Pages/NotFoundPage/NotFound';
import WithSpinner from './src/components/with-spinner/with-spinner.component';

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
        <Route path="/" exact />
        <Route path="/home" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/portfolio/:name" component={PortfolioPage} />
        <Route path="/portfolio-list" component={PortfolioListPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
