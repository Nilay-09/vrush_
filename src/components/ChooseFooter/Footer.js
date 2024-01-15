import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';




import backG from '../imgs/GalleryImgFolder/1440.svg'
import LinkedIn from '../imgs/GalleryImgFolder/Linkedin.svg'
import Github from '../imgs/GalleryImgFolder/Behance-1.svg'
import Leetcode from '../imgs/GalleryImgFolder/Medium.svg'
import Codechef from '../imgs/GalleryImgFolder/Instagram-1.svg'


import ScrollToTop from '../imgs/Footer/BlackIcon/Base.svg';

import gsap from 'gsap/all';
// import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default function Footer() {

    const controls = useAnimation();

    useEffect(() => {
        let isMounted = true;

        const bounceSequence = async () => {
            while (isMounted) {
                await controls.start({ y: -10 });
                await controls.start({ y: -15 });
                await controls.start({ y: -20 });
                await controls.start({ y: -10 });
            }
        };

        bounceSequence();

        return () => {
            isMounted = false; // Set the flag to false when the component is unmounted
        };
    }, [ controls ]);



    const scrollToTop = () => {
        gsap.to(window, {
            scrollTo: { y: 0 },
            duration: 2.9,
            ease: 'power2.inOut',
        });
    };

    return (
        <section className="w-full flex flex-col relative gap-[4rem]" id='contact'>
            <img
                src={backG}
                alt='Background'
                className='absolute w-full h-full object-cover'
            />
            <div className='relative w-full text-center mt-6 '>

                <div className="text-[#6698FA] text-[2rem] font-bold font-PT-Serif ">Let’s Build Together
                </div>
                <div className='flex gap-6 justify-center mt-[1.5rem] mb-[5.5rem] py-3'>
                    <a href="https://www.linkedin.com/in/vrushabh-dhote-a80b5326b/" target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition-all duration-150'>
                        <img
                            src={LinkedIn}
                            alt='LinkedIn'
                            className=''
                        />
                    </a>
                    <a href="https://www.behance.net/vrushabhdhote" target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition-all duration-150'>
                        <img
                            src={Github}
                            alt='Github'
                            className=''
                        />
                    </a>
                    <a href="https://medium.com/@vrushabhdhote" target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition-all duration-150'>
                        <img
                            src={Leetcode}
                            alt='LeetCode'
                            className=''
                        />
                    </a>
                    <a href="https://www.instagram.com/post_ux/" target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition-all duration-150'>
                        <img
                            src={Codechef}
                            alt='Codechef'
                            className=''
                        />
                    </a>
                </div>

                <div className='w-full flex justify-center flex-col md:flex-row mb-10'>
                    <div className="text-[#6698FA] text-xl font-medium font-['Poppins']">Let's get connected&nbsp;</div>
                    <a href="mailto:dhotevrushabh75@gmail.com" className="text-[#6698FA] text-xl font-bold font-['Poppins'] hover:underline transition-all ease-in duration-100 ">
                        dhotevrushabh75@gmail.com
                    </a>
                </div>
                <motion.img
                    src={ScrollToTop}
                    alt=""
                    className="absolute right-6 bottom-6 toTop"
                    animate={controls}
                    onClick={scrollToTop}
                />
            </div>

        </section >
    );
}

