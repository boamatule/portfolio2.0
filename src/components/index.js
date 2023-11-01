import { lazy } from 'react';

import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
// import Hero from './Hero';
// import Navbar from './Navbar';
// import About from './About';
// import Tech from './Tech';
// import Experience from './Experience';
// import Works from './Works';
// import Feedbacks from './Feedbacks';
// import Success from './Success';
// import Contact from './Contact';

const Hero = lazy(() => import('./Hero'));
const Navbar = lazy(() => import('./Navbar'));
const About = lazy(() => import('./About'));
const Tech = lazy(() => import('./Tech'));
const Experience = lazy(() => import('./Experience'));
const Feedbacks = lazy(() => import('./Feedbacks'));
const Works = lazy(() => import('./Works'));
const Success = lazy(() => import('./Success'));
const Contact = lazy(() => import('./Contact'));
const NotFound = lazy(() => import('./NotFound'));
const Loader = lazy(() => import('./AppLoader'));

export {
  About, BallCanvas,
  ComputersCanvas, Contact,
  EarthCanvas, Experience, Feedbacks, Hero,
  Navbar, StarsCanvas,
  Success, Tech, Works, NotFound,
  Loader
};
