import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import './App.css';
// import HomeInfo from './components/HomeInfo/HomeInfo';
import { ThemeProvider } from 'styled-components';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import PortfolioListPage from './Pages/PortfolioPage/PortfolioListPage';
import ResumePage from './Pages/Resume/ResumePage';
import NotFound from './Pages/NotFoundPage/NotFound';
import { NavBar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop';
// eslint-disable-next-line import/no-named-as-default
import GlobalStyles from './global-styles';
import DarkLightMode from './components/DarkLightMode';

const LightTheme = {
  pageBackground: 'white',
  tittleColor: '#dc658b',
  tagLineColor: 'black',
};

const DarkTheme = {
  pageBackground: '#282c36',
  tittleColor: 'lightpink',
  tagLineColor: 'lavender',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={themes[theme]}>
      <DarkLightMode theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

