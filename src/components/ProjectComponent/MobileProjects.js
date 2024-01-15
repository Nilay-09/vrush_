import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import ConvoBack from '../imgs/ProjectImgs/MobileImgs/tezzBackBox.svg';
import ConvoMobile from '../imgs/ProjectImgs/MobileImgs/tezzMob.svg';
import ConvoCard from '../imgs/ProjectImgs/MobileImgs/tezzCard.svg';

import ABack from '../imgs/ProjectImgs/MobileImgs/roomrBackBox.svg';
import AMobile from '../imgs/ProjectImgs/MobileImgs/roomrMob.svg';
import ACard from '../imgs/ProjectImgs/MobileImgs/RoomrCard.svg';
import toast from 'react-hot-toast';

export default function MobileProjects() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease-in-out',
            offset: 200,
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
    const renderProject = (url, images) => (

        <div className="flex relative w-full h-[500px] justify-center overflow-hidden" data-aos="fade-up" onClick={notify}>
            {images.map((image, index) => (
                <img key={index} loading='lazy' src={image} alt={`I-${index}`} className="absolute h-full w-full" />
            ))}
        </div>
    );

    return (
        <div className='flex justify-center items-center flex-wrap overflow-hidden relative mb-[1.25rem] w-screen px-[1.5rem]'>
            <div className="flex gap-2 justify-between flex-wrap mb-6 mt-[5rem]" id='projects'>
                <div className='pt-2 overflow-hidden ' id='dabba'>
                    <span className='text-[#28293d] font-a text-[2.75rem] font-bold leading-normal' id='splitText'> Recent Projects </span>
                </div>
                <div className="w-[60rem] text-[#555770] text-[18px] font-normal font-['Poppins'] text-justify">
                    In the last six months, I've had the opportunity to meet incredible people—founders, mentors, and passionate startup enthusiasts. Their wisdom and guidance have greatly influenced my journey.
                </div>
            </div>

            <div className="flex flex-col justify-center overflow-hidden w-screen ">
                {renderProject("#", [ ConvoBack, ConvoMobile, ConvoCard ])}
                {renderProject("#", [ ABack, AMobile, ACard ])}
            </div>
        </div>
    );
}
