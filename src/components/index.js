import { lazy } from "react";
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';
import CanvasLoader from "./Loader";

const Hero = lazy(() => import("./Hero"));
const Contact = lazy(() => import("./Contact"));
const Works = lazy(() => import("./Works"));
const About = lazy(() => import("./About"));
const Navbar = lazy(() => import("./Navbar"));
const Tech = lazy(() => import("./Tech"));
const Feedbacks = lazy(() => import("./Feedbacks"));
const Experience = lazy(() => import("./Experience"));

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