/* eslint-disable react/function-component-definition */
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage'));
const HomePage = lazy(() => import('./routes/HomePage/HomePage'));
const ContactPage = lazy(() => import('./Pages/ContactPage/ContactPage'));
const PortfolioListPage = lazy(() => import('./Pages/PortfolioPage/PortfolioListPage'));
const SuccessPage = lazy(() => import('./Pages/SuccessPage/SuccessPage'));
const NotFound = lazy(() => import('./Pages/NotFoundPage/NotFound'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const Navigation = lazy(() => import('./routes/Navigation/Navigation'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Profile = lazy(() => import('./components/Profile/Profile'));
const WithSpinner = lazy(() => import('./components/with-spinner/with-spinner.component'));

const renderLoader = () => <WithSpinner />;

function App() {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route path="/" element={Navigation}>
          <Route index element={HomePage} />
          <Route path="profile" element={Profile} />
          <Route path="about" element={AboutPage} />
          <Route path="contact" element={ContactPage} />
          <Route path="portfolio-list" element={PortfolioListPage} />
          <Route path="message-sent-successfully" element={SuccessPage} />
          <Route element={NotFound} />
        </Route>
      </Routes>
      <Footer />
      <ScrollToTop />
    </Suspense>
  );
}

export default App;
