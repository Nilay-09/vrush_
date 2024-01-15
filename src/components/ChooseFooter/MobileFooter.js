import React from 'react'
import gsap from 'gsap/all';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import LinkedIn from './Linkedin.svg'
import CodeChef from './Behance.svg'
import LeetCode from './Instagram.svg'
import Github from '../imgs/Footer/Medium.svg'

import Yop from './Tributetoportfolio.svg'
import LinkImg from '../imgs/Footer/MobileImgs/LinkedIcon.svg'

import bg from '../ChooseFooter/mobileFooter.svg'

gsap.registerPlugin(ScrollToPlugin);

export default function MobileFooter() {
    const scrollToTop = () => {
        gsap.to(window, {
            scrollTo: { y: 0 },
            duration: 2.9,
            ease: 'power2.inOut',
        });
    };

    const socialMediaIcons = [ LinkedIn, CodeChef, Github, LeetCode ];
    return (
        <div className='flex px-[1.5rem] py-4 flex-col items-end gap-4 w-screen min-h-[31.25rem] MobileFooter relative'>

            {socialMediaIcons.map((icon, index) => (
                <img
                    key={index}
                    src={icon}
                    alt="Top"
                    className='w-[9.125rem] hover:scale-105 transition-all duration-150 ease-in-out'
                />
            ))}
            <div className="absolute bottom-0 MobileFooterLand w-full min-h-[6.125rem] px-[1.5rem] flex justify-start items-center gap-2">

                <div className="flex flex-col px-[1.5rem]">
                    <div className="text-blue-400 text-xl font-medium font-['Poppins']">Let's get connected </div>
                    <a href="mailto:dhotevrushabh75@gmail.com" className="text-blue-400 text-xl font-semibold font-['Poppins']">dhotevrushabh75@gmail.com
                    </a>
                </div>
            </div>

            <img src={Yop} alt="Top" className='absolute bottom-6 right-6' onClick={scrollToTop} />
        </div >
    )
}
