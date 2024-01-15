import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-scroll';
import Scrollspy from 'react-scrollspy';
import { motion, useScroll, useSpring } from 'framer-motion';

import './Navbar.css';
import { NavLink } from 'react-router-dom';

import Logo from '../components/imgs/NavbarImgs/LOGOV.svg'

import I1 from '../components/imgs/NavbarImgs/fontImg/1.svg';
import I2 from '../components/imgs/NavbarImgs/fontImg/2.svg';
import I3 from '../components/imgs/NavbarImgs/fontImg/3.svg';
import I4 from '../components/imgs/NavbarImgs/fontImg/4.svg';
import I5 from '../components/imgs/NavbarImgs/fontImg/5.svg';
import I6 from '../components/imgs/NavbarImgs/fontImg/6.svg';
import I7 from '../components/imgs/NavbarImgs/fontImg/7.svg';



const Navbar = () => {
    // eslint-disable-next-line
    const [ activeNavItem, setActiveNavItem ] = useState(0);

    const handleSetActive = (to) => {
        const sectionIndex = sections.findIndex((section) => section === to);
        setActiveNavItem(sectionIndex);
    };

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const sections = [ 'home', 'projects', 'about' ];

    const handleResumeDownload = () => {
        const resumeUrl = process.env.REACT_APP_PUBLIC_URL + '/resume.pdf';

        const anchor = document.createElement('a');
        anchor.href = resumeUrl;
        anchor.download = 'resume.pdf';
        anchor.click();
    };
    
        const handleGalleryClick = () => {
            // Refresh the page
            window.location.href = '/gallery';
        };



    // LogoImgs
    const images = useMemo(() => [
        I1,
        I2,
        I3,
        I4,
        I5,
        I6,
        I7,
        // Add more image URLs as needed
    ], []);

    const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
    useEffect(() => {
        const animateImages = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
        const animationInterval = setInterval(animateImages, 1500);
        return () => clearInterval(animationInterval);
    }, [ images ]);

    return (
        <header className="relative">
            <nav className="fixed w-screen z-50 navigation flex justify-center items-center">
                <ul className="w-[100%] flex flex-wrap justify-between items-center relative my-5 rounded-xl py-2 px-[7.5rem]">
                    <div className="flex w-[6.5rem] h-[1.875rem] justify-center items-center">
                        <img src={Logo} alt="l" className="overflow-hidden w-full h-full" />
                    </div>

                    <Scrollspy
                        items={sections}
                        currentClassName="Navbar-active"
                        offset={-80}
                        onUpdate={(to) => handleSetActive(to)}
                        className='flex gap-[2.25rem] text-[#28293d]'
                    >
                        <li className="text-[1.125rem] font-light font-PT-Serif link p-1">
                            <Link to="home" spy={true} smooth={true} offset={-20} duration={1000} >
                                Home
                            </Link>
                        </li>
                        <li className="text-[1.125rem] font-light font-PT-Serif p-1">
                            <Link to="projects" spy={true} smooth={true} offset={0} duration={1000} className='link'>
                                Projects
                            </Link>
                        </li>
                        <li className="text-[1.125rem] font-light font-PT-Serif p-1">
                            <Link to="about" spy={true} smooth={true} offset={-10} duration={1000} className='link'>
                                About
                            </Link>
                        </li>
                        <li className="text-[1.125rem] font-light font-PT-Serif p-1">
                            <NavLink to="/gallery" onClick={handleGalleryClick}>
                                Gallery
                            </NavLink>
                        </li>
                        {/* <li
                            onClick={handleResumeDownload}
                            className="text-[1.125rem] font-light font-PT-Serif p-1">
                            Resume
                        </li> */}
                    </Scrollspy>
                </ul>
                <motion.div className="progress-bar" style={{ scaleX }} />
            </nav>
        </header>
    );
};

export default Navbar;





