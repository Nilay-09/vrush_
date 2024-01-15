import React, { useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

import MountainMiddle from '../imgs/HomepageImgs/MountainMiddle2.svg';
import MountainLast from '../imgs/HomepageImgs/MountainLast2.svg';
import SampleM2000 from '../imgs/HomepageImgs/SampleM2000.svg';


// const customEasing = t => (t < 0.5 ? 16 * t * t * t * t * t : 1 + Math.pow(2 * t - 2, 5) / 2);

const customEasing = t => (t === 0 ? 0 : t === 1 ? 1 : t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2);



const gentleConfig = { duration: 1440, easing: customEasing };

const AnimatedImage = ({ src, style, zIndex }) => (
    <animated.div style={{ ...style, zIndex }} className='absolute flex justify-center items-center w-[100vw]'>
        <img src={src} alt="" className='h-[100%] w-[100%]' />
    </animated.div>
);

const preloadImages = (images) => {
    images.forEach((image) => {
        new Image().src = image;
    });
};

export default function Screen1300() {


    const props1 = useSpring({
        opacity: 1,
        scale: 1,
        bottom: '5%',
        right: '0%',
        from: { opacity: 1, scale: 1.6, bottom: '-20%', right: '0%' },
        config: gentleConfig,
    });

    const props2 = useSpring({
        opacity: 1,
        scale: 1,
        bottom: '5%',
        left: '0%',
        width: '100%',
        from: { opacity: 1, scale: 1.8, bottom: '-20%', left: '0%' },
        config: gentleConfig,
    });

    const propsText = useSpring({
        opacity: 1,
        bottom: '-90px',
        from: { opacity: 0, bottom: '-100px' },
        config: { mass: 4, tension: 20, friction: 15 },
        delay: 700,
    });

    const props3 = useSpring({
        opacity: 1,
        scale: 1,
        bottom: '0%',
        left: '0%',
        from: { opacity: 0.6, scale: 2.6, bottom: '-10%' },
        config: gentleConfig,
    });

    useEffect(() => {
        // Preload mountain images when the component mounts
        preloadImages([ MountainLast, MountainMiddle, SampleM2000 ]);
    }, []);

    return (
        <section className='relative w-full min-h-[95vh] overflow-hidden flex flex-col mt-16' id='home'>
            <AnimatedImage src={MountainLast} style={props1} zIndex={20} />
            <AnimatedImage src={MountainMiddle} style={props2} zIndex={40} />

            <animated.div style={propsText} className='relative z-[30] flex justify-center items-center'>
                <div className='flex justify-center items-center mt-5'>

                    <div className="w-full text-center flex flex-col items-center gap-1 font-PT-Serif">
                        <div className="text-[#555770] text-[1.5rem] font-regular overflow-hidden">
                            It's
                            <span className="text-[#3e7bfa]">&nbsp;Vrushabh</span>
                        </div>

                        <div className="max-w-[25.375rem] text-center text-[#28293d] text-base font-poppins text-[0.875rem] font-light mx-auto overflow-hidden">
                            I love creating minimalist user interfaces that prioritize both user experience and business value in design
                        </div>
                    </div>

                </div>
            </animated.div>

            <AnimatedImage src={SampleM2000} style={props3} zIndex={999} />
        </section>
    );
}
