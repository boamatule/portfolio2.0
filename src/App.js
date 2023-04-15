import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './routes/Navigation/Navigation';

const Header = lazy(() => import('./Pages/Header/Header'));
const AboutPage = lazy(() => import('./Pages/AboutPage/AboutPage'));
const HomePage = lazy(() => import('./routes/HomePage/HomePage'));
const ContactPage = lazy(() => import('./Pages/ContactPage/ContactPage'));
const PortfolioListPage = lazy(() => import('./Pages/PortfolioPage/PortfolioListPage'));
const SuccessPage = lazy(() => import('./routes/SuccessPage/SuccessPage'));
const NotFound = lazy(() => import('./Pages/NotFoundPage/NotFound'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Profile = lazy(() => import('./components/Profile/Profile'));
const WithSpinner = lazy(() => import('./components/with-spinner/with-spinner.component'));

const renderLoader = () => <WithSpinner />;

const App = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about_me" element={<AboutPage />} />
          <Route path="contact_me" element={<ContactPage />} />
          <Route path="projects" element={<PortfolioListPage />} />
          <Route path="message_sent_successfully" element={<SuccessPage />} />
          <Route element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense >
  );
}

export default App;