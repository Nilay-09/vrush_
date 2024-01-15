import React, { useEffect } from 'react';


import SplitType from 'split-type';
import { gsap, ScrollTrigger } from 'gsap/all';

// Cards Import

import CardConvo from '../imgs/ProjectImgs/TezzThisTimeForsuperReal.svg';
import Arrow from '../imgs/ProjectImgs/GreenTezzarrow.svg';

import CardArtist from '../imgs/ProjectImgs/Roomr.svg';
import ArrowA from '../imgs/ProjectImgs/Roomrarrow.svg';
import toast from 'react-hot-toast';

// Mobile


export default function Project() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const boxes = gsap.utils.toArray('.box');

        boxes.forEach((box, i) => {
            const anim = gsap.fromTo(box, { autoAlpha: 0.4, y: 50 }, { duration: 1, autoAlpha: 1, y: 0 });
            const triggerId = `trigger-${i}`;
            ScrollTrigger.create({
                trigger: box,
                animation: anim,
                toggleActions: 'play none none none',
                start: 'top 90%', // Adjust this value to trigger animations at a different scroll position
                end: 'bottom 60%',  // Adjust this value to control when the animation ends
                once: true,
                id: triggerId,
            });
        });

        return () => {
            // Cleanup if needed
            boxes.forEach((box, i) => {
                const triggerId = `trigger-${i}`;
                ScrollTrigger.getById(triggerId).kill();
            });
        };
    }, []);



    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        const mySplitText = new SplitType('#splitText', { types: 'chars' });
        let chars = mySplitText.chars;

        gsap.set(chars, { autoAlpha: 1 });

        gsap.from(chars, {
            scrollTrigger: {
                trigger: '#projects',
                start: 'top 60%',
                end: 'bottom 80%',
                force3D: true,
                // scrub: true,
                once: true,
                // markers: true,
            },
            duration: 3,
            yPercent: 50,
            autoAlpha: 0, // Animate opacity from 0 to 1
            stagger: 0.03,
            ease: 'back.out',
        });
    }, []);

    const notify = () => {
        toast('File has yet to be uploaded', {
            style: {
                border: '1px solid #6698fa',
                padding: '8px',
                color: '#6698fa',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
        });
    }
    return (
        <section className='flex justify-center items-center flex-wrap overflow-hidden relative mb-[6.25rem] w-screen px-[7.5rem]' id='projects'>

            <div className="flex justify-between flex-wrap  mb-6 mt-[2.25rem]">
                <div className='pt-2 overflow-hidden ' id='dabba'>
                    <span className='text-[#28293d] font-PT-Serif  text-[2.75rem] font-bold  leading-normal' id='splitText'> Recent Projects </span>
                </div>
                <div className="w-full text-[#555770] text-[18px] font-normal font-['Poppins'] text-justify">
                    In the past six months, my journey's been a rollercoaster of encounters with founders, mentors, and startup aficionados—like a high-speed networking carnival. Their insights are the thrilling twists, turns, and loops that make this ride unforgettable. Here's to navigating with a grin and a pocket full of wisdom! Check out some cool projects below.
                </div>
            </div>


            {/* 3 Project Wale Component */}


            <div className="grid grid-cols-1 project-align place-content-center  overflow-hidden gap-9 ">
                {/* <a href="" target="_blank" rel="noopener noreferrer"> */}

                <div onClick={notify}
                    className="flex justify-center relative cardHolder hoverEffect min-h-[18.75rem] box">
                    <img loading='lazy' src={CardConvo} alt="N0" className="w-full project-img p-4" />
                    <img loading='lazy' src={Arrow} alt="" className='absolute w-full h-full z-10 absoluteArrow' />
                </div>
                {/* </a> */}

                {/* <a href="" target="_blank" rel="noopener noreferrer" > */}

                <div onClick={notify}
                    className="flex justify-center relative cardHolder hoverEffect min-h-[18.75rem] box">
                    <img loading='lazy' src={CardArtist} alt="N0" className="w-full project-img p-4" />
                    <img loading='lazy' src={ArrowA} alt="" className='absolute w-full h-full z-10 absoluteArrow' />
                </div>
                {/* </a> */}
            </div>

        </section>

    )
}









