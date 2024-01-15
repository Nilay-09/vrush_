import React from 'react'
import gsap from 'gsap/all';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Arr from '../imgs/Footer/MobileImgs/Arrow.svg';

import LinkedIn from '../imgs/Footer/MobileImgs/Linkedin.svg'
import CodeChef from '../imgs/Footer/MobileImgs/Codechef.svg'
import LeetCode from '../imgs/Footer/MobileImgs/Leet.svg'
import Github from '../imgs/Footer/MobileImgs/Git.svg'

import Yop from '../imgs/Footer/MobileImgs/Base.svg'
import LinkImg from '../imgs/Footer/MobileImgs/LinkedIcon.svg'

gsap.registerPlugin(ScrollToPlugin);

export default function MobileFooter() {
    const scrollToTop = () => {
        gsap.to(window, {
            scrollTo: { y: 0 },
            duration: 2.9,
            ease: 'power2.inOut',
        });
    };
    return (
        <div className='w-screen min-h-[31.25rem] MobileFooter relative'>

            <div className="flex flex-col justify-start ml-[1.5rem] mt-[1.9375rem]">

                <div className="text-[#6698fa] text-[32px] font-bold font-PT-Serif">Let’s Build Together</div>
                <form
                    method="POST"
                    action="https://formspree.io/f/xnqenpwo"
                    className="flex flex-col max-w-[300px]">
                    <div className="relative">
                        <div className="flex max-w-[17.25rem] mt-[2.125rem]">
                            <input
                                type="email"
                                name="email"
                                required
                                className="h-full border-none p-2 outline-none bg-transparent text-[#6698fa] text-[1.5rem] font-light font-['Poppins'] placeholder-style "
                                placeholder="Email Address"
                            />
                            <button type='submit'>
                                <img src={Arr} alt="" className='w-[4.125rem]' />
                            </button>

                        </div>
                        <div className="w-[264px] h-[0px] border border-[#6698fa]"></div>


                    </div>
                    <div className="relative mt-[1.5rem]">
                        <textarea
                            name="message"
                            className=" max-h-[7.125rem] h-[2.575rem] 
                            w-full text-opacity-80
                            border-none p-2 outline-none bg-transparent text-[#6698fa] text-[1.5rem] font-light font-['Poppins'] placeholder-style "
                            placeholder="Message (Optional)"

                        ></textarea>
                        <div className="w-[264px] h-[0px] border border-[#6698fa]"></div>
                    </div>
                </form>

                <div className="mt-[3.1875rem] w-4/5  h-[3.75rem] flex gap-[1.5rem]">
                    <div className=" h-full w-[2.975rem] flex justify-center items-center">
                        <a href="https://www.linkedin.com/in/nilaybhotmange/" target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition-all duration-150'>
                            <img src={LinkedIn} alt="" className='h-full w-full ' />
                        </a>
                    </div>
                    <div className=" h-full w-[2.975rem] flex justify-center items-center">
                        <a href="https://leetcode.com/nilaybhotmange2002/" target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition-all duration-150'>
                            <img src={LeetCode} alt="" className='h-full w-full ' />
                        </a>
                    </div>
                    <div className=" h-full w-[2.975rem] flex justify-center items-center">
                        <a href="https://www.codechef.com/users/nilay_09" target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition-all duration-150'>
                            <img src={CodeChef} alt="" className='h-full w-full ' />
                        </a>
                    </div>
                    <div className=" h-full w-[2.975rem] flex justify-center items-center">
                        <a href="https://github.com/Nilay-09" target="_blank" rel="noopener noreferrer" className='hover:scale-105 transition-all duration-150'>
                            <img src={Github} alt="" className='h-full w-full ' />
                        </a>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-0 MobileFooterLand w-full min-h-[6.125rem] px-[1.5rem] flex justify-start items-center gap-2">

                <img src={LinkImg} alt="" className='h-full aspect-square w-[4.3625rem]' />
                <div className="flex flex-col">
                    <div className="text-blue-400 text-xl font-medium font-['Poppins']">Let's get connected </div>
                    <a href="mailto:nilayb07@gmail.com" className="text-blue-400 text-xl font-semibold font-['Poppins']">nilayb07@gmail.com
                    </a>
                </div>
                <img src={Yop} alt="Top" className='absolute bottom-2 right-2' onClick={scrollToTop} />
            </div>

        </div>
    )
}
