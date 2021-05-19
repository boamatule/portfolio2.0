import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import GlobalStyles from './global-styles';
import './App.css';
import Footer from './components/Footer/Footer';
import HomeInfo from './components/HomeInfo/HomeInfo';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import PortfolioListPage from './Pages/PortfolioPage/PortfolioListPage';
import ResumePage from './Pages/Resume/ResumePage';
import NotFound from './Pages/NotFoundPage/NotFound';
import { NavBar } from './components';

class App extends Component {
  render() {
    return (
      <Router>
        <GlobalStyles />
        <NavBar />
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/portfolio/:name" component={PortfolioPage} />
          <Route path="/portfolio-list" component={PortfolioListPage} />
          {/* <Route path="/HomeInfo" component={HomeInfo} /> */}
          <Route component={NotFound} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
