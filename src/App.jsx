import { inject as analytics } from '@vercel/analytics';
import { BrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <div className='relative z-0 bg-primary dark:bg-white'>
        <div 
          className='bg-hero-pattern bg-cover bg-no-repeat bg-center'
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Experience />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    </Suspense>
  );
}

export default App;