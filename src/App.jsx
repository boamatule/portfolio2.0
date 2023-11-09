import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";

const App = () => {
	return (
		<>
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
			</div>
		</>
	);
};

export default App;
