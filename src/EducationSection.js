import React from 'react'

export default function EducationSection() {
    return (

        <div className="px-[1.5rem] md:px-0  py-[50px] grid-container z-30 border-t-0 gap-y-6">

            {/* First Column */}
            <div className="text-slate-600 text-[28px] font-bold grid-row-2 ">Education</div>


            {/* 1st exp of 1,2 */}

            <div className="flex-col justify-start items-start gap-4 flex">

                <div className="text-slate-600 text-lg font-bold font-['Poppins']">Masters’ Union
                </div>

                <div className="text-slate-600 text-lg font-medium font-['Poppins']">User Experience MasterCamp
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">June 2023 - Ongoing
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">Gurgaon
                </div>


            </div>
            {/* Fist desc */}
            <div className="max-w-[387px] text-slate-600 text-base font-light font-['Poppins']">The mastercamp in user experience design is a 6-month UI/UX program co-designed by Onething Design Studios. </div>


            <div className="flex-col justify-start items-start gap-4 flex mt-10 md:mt-0">

                <div className="text-slate-600 text-lg font-bold font-['Poppins']">St. Francis De Sales College
                </div>

                <div className="text-slate-600 text-lg font-medium font-['Poppins']">Bachelor of Science
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">2019 - 2022
                </div>


                <div className="text-gray-400 text-lg font-medium font-['Poppins']">Nagpur
                </div>

            </div>
            {/* Fist desc */}
            <div className="max-w-[387px] text-slate-600 text-base font-light font-['Poppins'] ">
                Graduated with a major in physics, mathematics, and computer science. Additionally, I spent time in the realm of arts and design, honing my skills using Blender for 3D low-poly arts.</div>


        </div>
    )
}
