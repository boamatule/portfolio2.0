import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";

import { Navbar, StarsCanvas } from "./components";

import Experience from "./components/Experience.jsx";
import Feedbacks from "./components/Feedbacks.jsx";

const Tech = lazy(() => import("./components/Tech"));
const Hero = lazy(() => import("./components/Hero"));
const Contact = lazy(() => import("./components/Contact"));
const Works = lazy(() => import("./components/Works"));
const About = lazy(() => import("./components/About"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
	return (
		<div className="relative z-0 bg-primary dark:bg-white">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<About />
			<Works />
			<Tech />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
			<Footer />
		</div>
	);
};

export default App;
