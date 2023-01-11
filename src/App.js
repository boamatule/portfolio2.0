import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
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
    <Routes>
      <ScrollToTop />
      {/* <NavBar /> */}
      <Route path="/" element={HomePage} index />
      {/* <Route path="/home" element={HomePage} exact /> */}
      <Route path="/profile" element={Profile} />
      {/* <Route path="/nav" element={NavBar} /> */}
      <Route path="/about" element={AboutPage} />
      <Route path="/contact" element={ContactPage} />
      <Route path="/portfolio-list" element={PortfolioListPage} />
      <Route path="/message-sent-successfully" element={SuccessPage} />
      <Route element={NotFound} />
      {/* <Footer /> */}
    </Routes>
  </Suspense>
);

export default App;
