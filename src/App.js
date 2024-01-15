import React, { useState, useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import Lenis from '@studio-freight/lenis'


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";

import LoaderAnimation from './LoaderAnimation';
import CustomCursor from './CustomCursor';
import Gallery from './components/GallaryGrid/Gallery';
import Home from './components/Home';


function App() {
  const [ loading, setLoading ] = useState(true);


  // Refresh Issue Solver
  useEffect(() => {
    const storedScrollPosition = localStorage.getItem('scrollPosition');
    if (storedScrollPosition) {
      window.scrollTo(0, parseInt(storedScrollPosition));
    }

    const handleBeforeUnload = () => {
      localStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  // Loader Timing Events
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => {
      clearTimeout(loaderTimeout);
      window.removeEventListener('load', handleLoad);
    };
  }, []);


  useEffect(() => {
    const lenis = new Lenis({
      smooth: 0.3, // Experiment with different smooth values
      direction: 'vertical', // Adjust if you want horizontal scrolling
    });
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);




  return (

    <BrowserRouter>
      <div className={`app-container ${loading ? "loading" : ""}`}>

        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>



        <CustomCursor />
        {loading ? (
          <LoaderAnimation />

        ) : (

          <div className='bodyImg'>


            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>

          </div>
        )
        }
      </div >
    </BrowserRouter>
  );
}

export default App;
