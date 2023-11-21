import { lazy } from 'react';

import { BallCanvas, ComputersCanvas, EarthCanvas, StarsCanvas } from './canvas';

const Hero = lazy(() => import('./Hero'));
const Navbar = lazy(() => import('./Navbar'));
const About = lazy(() => import('./About'));
const Tech = lazy(() => import('./Tech'));
const Experience = lazy(() => import('./Experience'));
const Feedbacks = lazy(() => import('./Feedbacks'));
const Works = lazy(() => import('./Works'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));

export {
  About, BallCanvas,
  ComputersCanvas, Contact,
  EarthCanvas, Experience, Feedbacks, Footer, Hero, Navbar, StarsCanvas, Tech, Works
};
