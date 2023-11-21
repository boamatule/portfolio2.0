import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";

import { Experience, Feedbacks, Navbar, StarsCanvas } from "./components";

const Tech = lazy(() => import("./components/Tech"));
const Hero = lazy(() => import("./components/Hero"));
const Contact = lazy(() => import("./components/Contact"));
const Works = lazy(() => import("./components/Works"));
const About = lazy(() => import("./components/About"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          // You can access the lazy-loaded component without re-importing
          // The 'Tech' component is already imported with React.lazy
          // Do something with Tech
        }
      });
    };

    const observerOptions = {
      // your options here
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Target element to observe
    const targetElement = document.getElementById("yourTargetElementId");

    // Start observing the target element
    if (targetElement) {
      observer.observe(targetElement);
    }

    // Cleanup: Stop observing when the component is unmounted
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
};

export default App;
