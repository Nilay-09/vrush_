import React, { useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';


import LinesWhite from '../imgs/ContactBG/Mobile/Frontside.svg';
// import Straps from '../imgs/ContactBG/Mobile/MainBox.svg';


const MobileContact = () => {
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Your GSAP animations using ScrollTrigger
        gsap.to('.WhiteStraps', {

            scrollTrigger: {
                trigger: '.ShineHolder',
                start: 'top 70%',
                end: 'bottom 20%',
                scrub: true,
                force3D: true,
                // markers: true,
                // once: true,
            },
            duration: 4,
            ease: 'easeInOut',
            xPercent: window.innerWidth,
        });
    }, []);

    return (
        <div className='w-screen h-[13.625rem] my-[3.125rem] relative ShineHolder'>

            <div className="flex justify-center flex-col gap-3 w-[31.25rem] z-[-10] h-full absolute left-[-1.25rem]" >
                <div className=" h-[40px]  bg-[#BDD3FF]" style={{ transform: 'rotate(10deg)' }}></div>
                <div className=" h-[40px] bg-[#85ADFD]" style={{ transform: 'rotate(10deg)' }}></div>
            </div>
            <img src={LinesWhite} alt="" className=' w-[82px] h-full WhiteStraps' />
        </div >
    );
};

export default MobileContact;
