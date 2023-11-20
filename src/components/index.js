// import React from 'react';

// import { BallCanvas, ComputersCanvas, EarthCanvas, StarsCanvas } from './canvas';

// const Hero = React.lazy(() => import('./Hero'));
// const Navbar = React.lazy(() => import('./Navbar'));
// const About = React.lazy(() => import('./About'));
// const Tech = React.lazy(() => import('./Tech'));
// const Experience = React.lazy(() => import('./Experience'));
// const Feedbacks = React.lazy(() => import('./Feedbacks'));
// const Works = React.lazy(() => import('./Works'));
// const Contact = React.lazy(() => import('./Contact'));

// export {
//   About, BallCanvas,
//   ComputersCanvas, Contact,
//   EarthCanvas, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works
// };



import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import CanvasLoader from "./Loader";


export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  CanvasLoader,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
};