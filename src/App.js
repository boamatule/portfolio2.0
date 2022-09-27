import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import 'normalize.css';

const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage'));
const HomePage = lazy(() => import('./Pages/AboutPage/AboutPage'));
const ContactPage = lazy(() => import('./Pages/ContactPage/ContactPage'));
const PortfolioListPage = lazy(() => import('./Pages/PortfolioPage/PortfolioListPage'));
const SuccessPage = lazy(() => import('./Pages/SuccessPage/SuccessPage'));
const NotFound = lazy(() => import('./Pages/NotFoundPage/NotFound'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const NavBar = lazy(() => import('./components/NavBar/NavBar'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Profile = lazy(() => import('./components/Profile/Profile'));

const renderLoader = () => <p>Loading</p>;

const App = () => (
  <Suspense fallback={renderLoader()}>
    <Router>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/home" component={HomePage} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/portfolio-list" component={PortfolioListPage} />
        <Route path="/message-sent-successfully" component={SuccessPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </Suspense>
);

export default App;
