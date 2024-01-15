







import React from 'react';
// import { useEffect, useState } from 'react';
// eslint-disable-next-line
import { useSpring, animated, config } from '@react-spring/web';
// import BadaMountain from './imgs/HomepageImgs/MountainFirst.svg';
import Middle from './imgs/HomepageImgs/MountainMiddle2.svg';
import Chota from './imgs/HomepageImgs/MountainLast2.svg';
// import Chota1 from './imgs/HomepageImgs/Chota1.svg';
import Text from './imgs/HomepageImgs/HiNilay.svg';
import SampleM2000 from './imgs/HomepageImgs/SampleM2000.svg';

export default function HomepageAnimation() {

    const gentleEasing = t => t * (2 - t);
    const gentleConfig = { duration: 1240, easing: gentleEasing };

    const props1 = useSpring({
        scale: 1.6,
        right: '0%',
        from: {
            scale: 1.6,
            bottom: '-20%',
            right: '0%',
        },
        to: async (next) => {
            await next({ scale: 1, bottom: '5%', right: '0%' });
        },
        config: gentleConfig,
    });


    const props2 = useSpring({
        scale: 1.6,
        left: '0%',
        from: {
            scale: 1.6,
            bottom: '-20%',
        },
        to: async (next) => {
            await next({ scale: 1, bottom: '5%', left: '0%' });
        },
        config: gentleConfig,
    });

    const propsText = useSpring({
        translateY: '0%',
        translateX: '0%',
        from: {
            translateY: '100vh',
        },
        to: {
            translateY:'2vh',
        },
        config: gentleConfig,
    });


    // ...

    const props3 = useSpring({
        scale: 1.6,
        left: '0%',
        from: {
            scale: 1.6,
            bottom: '10%',
        },
        to: async (next) => {
            await next({ scale: 1, bottom: '0%', left: '0%' });
        },
        config: gentleConfig,
    });
    return (
        <div className='relative min-h-screen overflow-hidden flex flex-col mt-16 '>

            {/* This is my div1 */}
            <animated.div
                style={{
                    transform: props1.scale.interpolate(scale => `scale(${scale})`),
                    height: props1.height,
                    bottom: props1.bottom,  // Add the bottom property
                    right: props1.right,      // Add the left property
                }}
                className='absolute z-10 flex justify-center items-center'
            >
                <div className="w-[100vw]">
                    <img src={Chota} alt="" className='h-[100%] w-[100%]' />
                </div>
            </animated.div>


            <animated.div
                style={{
                    transform: props2.scale.interpolate(scale => `scale(${scale})`),
                    height: props2.height,
                    bottom: props2.bottom,  // Add the bottom property
                    left: props2.left,      // Add the left property
                }}
                className='absolute z-[15] flex justify-center items-center'
            >
                <div className="w-[100vw]">
                    <img src={Middle} alt="" className='h-[100%] w-[100%]' />
                </div>
            </animated.div>

            {/* This is my div2 */}
            <animated.div style={{ transform: propsText.translateY.interpolate(y => `translateY(${y})`) }} className='relative z-[14]'>
                <div className="flex justify-center items-center">
                    <img src={Text} alt="Nilay" className='h-[50%] w-[50%]' />
                </div>
            </animated.div>

            <animated.div
                style={{
                    transform: props3.scale.interpolate(scale => `scale(${scale})`),
                    height: props3.height,
                    bottom: props3.bottom,  // Add the bottom property
                    left: props3.left,      // Add the left property
                }}
                className='absolute z-20 flex justify-center items-center'
            >
                <div className="w-[100vw]">
                    <img src={SampleM2000} alt="" className='h-[100%] w-[100%]' />
                </div>
            </animated.div>
        </div>
    );
}





























