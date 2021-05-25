/* eslint-disable react/button-has-type */
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useDarkMode from './components/DarkMode/useDarkMode';
// eslint-disable-next-line import/no-named-as-default
import GlobalStyles from './global-styles';
import './App.css';
// import HomeInfo from './components/HomeInfo/HomeInfo';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import PortfolioListPage from './Pages/PortfolioPage/PortfolioListPage';
import ResumePage from './Pages/Resume/ResumePage';
import NotFound from './Pages/NotFoundPage/NotFound';
import { NavBar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';
import { lightTheme, darkTheme } from './components/DarkMode/Themes';
import Toggle from './components/DarkMode/Toggler';

const App = () => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  // if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <Router>
        <GlobalStyles />
        {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
        <ScrollToTop />
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/portfolio/:name" component={PortfolioPage} />
          <Route path="/portfolio-list" component={PortfolioListPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
