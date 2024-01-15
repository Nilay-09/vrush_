
// MobileNavbar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import LOGO from './components/imgs/NavbarImgs/LOGOV.svg';
import Hamburger from './components/imgs/NavbarImgs/menu.svg';
import Cross from './components/imgs/NavbarImgs/folder-cross.svg';
import { NavLink } from 'react-router-dom';



export default function MobileNavbar() {
  const [ clicked, setClicked ] = useState(false);
  const [ activeNavItem, setActiveNavItem ] = useState(0);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleGalleryClick = () => {
    // Refresh the page
    window.location.href = process.env.REACT_APP_PUBLIC_URL + '/gallery';
  };

  const handleResumeDownload = () => {
    const resumeUrl = process.env.REACT_APP_PUBLIC_URL + '/resume.pdf';

    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'resume.pdf';
    anchor.click();
  };

  return (
    <div className={`main-container object-contain ${clicked ? 'h-screen' : ''}`} style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Navigation bar */}
      <div className="nav-holder w-full flex justify-between p-6 fixed z-[1000]">
        <img src={LOGO} alt="Logo" />
        <div className="w-[3rem] transition-all duration-300 ease">
          <img src={clicked ? Cross : Hamburger} alt="Menu" onClick={handleClick} className='w-full' />
        </div>
      </div>

      {/* Dropdown menu */}
      <motion.div
        initial={{ height: '0vh', translateY: '-100%', width: '100vw', position: 'fixed' }}
        animate={{ height: clicked ? '100vh' : '0vh', translateY: clicked ? '0%' : '-100%' }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className='dropdown h-screen bodyImg object-contain NavBG bg-white'
      // style={{ zIndex: 1 }}
      >
        {/* Menu content */}
        <div className="MenuBar w-full flex justify-center items-center text-black flex-col pt-[7rem]  ">
          {/* Menu items with smooth scrolling */}
          {[
            { text: 'Home', target: 'home' },
            { text: 'Projects', target: 'projects' },
            { text: 'About', target: 'about' },
          ].map((item, index) => (
            <ScrollLink
              key={index}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-1000}
              duration={500}
              onClick={() => { handleClick(); setActiveNavItem(index); }}
              className={`py-[15px] w-screen justify-center items-center gap-2.5 inline-flex text-[#555770]`}
            >
              <div className={`text-[32px] font-light font-PT-Serif ${index === activeNavItem ? 'bg-[#CCDDFF] w-full text-center py-3 text-[#6698fa]' : ''}`}>{item.text}</div>
            </ScrollLink>
          ))}
          <div
            onClick={() => {
              handleGalleryClick();
              handleClick();
            }}
            className={`text-[#555770] text-[2rem] font-light py-3 font-PT-Serif }`}>
            <NavLink to="/gallery">
              Gallery
            </NavLink>
          </div>
          <div
            onClick={() => {
              handleResumeDownload();
              handleClick();
            }}
            className={`text-[#555770] text-[2rem] font-light py-3 font-PT-Serif }`}>
            Resume
          </div>
        </div>
      </motion.div>
    </div>
  );
}
