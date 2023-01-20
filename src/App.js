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

const App = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about_me" element={<AboutPage />} />
          <Route path="contact_me" element={<ContactPage />} />
          <Route path="curated_projects" element={<PortfolioListPage />} />
          <Route path="message_sent_successfully" element={<SuccessPage />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
      <ScrollToTop />
    </Suspense>
  );
}

export default App;
