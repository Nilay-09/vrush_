import React from 'react'

import ProfileImg from './components/imgs/AboutImg/profile.svg'
// eslint-disable-next-line 
import AboutMeStrapBar from './AboutMeStrapBar';
import EducationSection from './EducationSection';
import Awards from './Awards';

export default function MobileAboutMe() {
    return (
        <>
            <div className='w-screen flex justify-center items-center flex-col' id='about'>

                {/* Profile Holder */}
                <div className="mt-[3vh] w-4/5 flex justify-around items-center flex-col lg:flex-row">

                    {/* Heading And About Holder */}
                    <div className="flex flex-col lg:pt-[4.625rem]">

                        <section>
                            <div className="text-[#555770] text-[44px] font-bold font-a ">This Section </div>
                            <div className="text-[#6698FA] text-[44px] font-bold font-a">Is Mine.</div>
                        </section>

                        <img loading='lazy' src={ProfileImg} alt="" />
                        <div className="max-w-[595px] text-[#555770] text-[1.125rem] font-normal font-['Poppins'] mt-[16px]  text-justify "><span className='font-bold '>Hello, I'm Vrushabh,</span>
                            <div className="mt-4">
                                <div className="mb-2">
                                    I am currently living in Nagpur, pursuing a User Experience Mastercamp from Master's Union. In the past, I worked as a UX intern at Needl.ai. Now, I am discovering opportunities in startups where I could leverage my skills to their fullest potential as a designer.
                                </div>
                                During my free time, I enjoy reading (currently Shoe Dog) and engaging in bodyweight lifting activities as part of my regular routine. Well, there's a lot to know about me. So if you want to know, you can connect with me on LinkedIn.

                                And don't forget to go through the gallery; I'm sure you will like.
                            </div>
                        </div>

                    </div>


                </div>

            </div>
            <EducationSection />
            <Awards />
        </>
    )
}
