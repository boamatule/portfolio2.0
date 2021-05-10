import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import AboutPage from './Pages/AboutPage/AboutPage';
import HomePage from './Pages/HomePage/HomePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import PortfolioListPage from './Pages/PortfolioPage/PortfolioListPage';
import ResumePage from './Pages/Resume/ResumePage';
import NotFoundPage from './Pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HomePage />
        </div>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/portfolio/:name" component={PortfolioPage} />
          <Route path="/portfolio-list" component={PortfolioListPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
