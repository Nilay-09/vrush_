import React from 'react'
import ProfileImg from './components/imgs/AboutImg/profile.svg';
import AboutMeStrapBar from './AboutMeStrapBar';
import EducationSection from './EducationSection';
import Awards from './Awards';


export default function AboutMe() {
    return (
        <section className='w-screen flex justify-between items-center flex-col px-[7.5rem]' id='about'>

            {/* Profile Holder */}
            <div className="flex justify-around items-center">

                {/* Heading And About Holder */}
                <div className="flex flex-col lg:pt-[4.625rem]">

                    <section>
                        <div className="text-[#1c1c28] text-[2.75rem] font-bold font-a ">This Section </div>
                        <div className="text-[#3e7bFA] text-[2.75rem] font-bold font-a">Is Mine.</div>
                    </section>

                    <div className="max-w-[595px] text-[#1c1c28] text-[1rem] font-light font-['Poppins'] mt-[16px] text-justify">I am currently living in Nagpur, pursuing a User Experience Mastercamp from <span className='text-[#6698fa]'>
                        <a href="https://mastersunion.org/" target="_blank" rel="noopener noreferrer">
                            Master's Union.
                        </a>
                    </span> In the past, I worked as a UX intern at <span className='text-[#6698fa]'> <a href="https://www.needl.ai/" target="_blank" rel="noopener noreferrer">Needl.ai.</a></span> Now, I am discovering opportunities in startups where I could leverage my skills to their fullest potential as a designer.


                        <div className="">During my free time, I enjoy reading (currently Shoe Dog) and engaging in bodyweight lifting activities as part of my regular routine. Well, there's a lot to know about me. So if you want to know, you can connect with me on LinkedIn.
                            And don't forget to go through the gallery; I'm sure you will like.
                        </div>
                    </div>

                </div>

                {/* Image Holder */}
                <div className="flex justify-center items-center p-[1.375rem]">
                    <img loading='lazy' src={ProfileImg} alt="" />
                </div>
            </div>

            <EducationSection />
            <Awards />
        </section>
    )
}
