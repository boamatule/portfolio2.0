import React from 'react';

import { BallCanvas, ComputersCanvas, EarthCanvas, StarsCanvas } from './canvas';

const Hero = React.lazy(() => import('./Hero'));
const Navbar = React.lazy(() => import('./Navbar'));
const About = React.lazy(() => import('./About'));
const Tech = React.lazy(() => import('./Tech'));
const Experience = React.lazy(() => import('./Experience'));
const Feedbacks = React.lazy(() => import('./Feedbacks'));
const Works = React.lazy(() => import('./Works'));
const Contact = React.lazy(() => import('./Contact'));

export {
  About, BallCanvas,
  ComputersCanvas, Contact,
  EarthCanvas, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works
};
