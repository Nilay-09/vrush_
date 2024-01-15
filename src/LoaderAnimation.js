import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import Loader from './components/imgs/Loader/Loader1.json';

export default function LoaderAnimation() {
    const [ loadingSecond, setLoadingSecond ] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setLoadingSecond(true);
        };

        try {
            const animationData = Loader;

            if (animationData) {
                // Set a timeout to simulate the animation duration
                setTimeout(() => {
                    handleLoad();
                }, 2000); // Adjust the timeout duration as needed
            } else {
                throw new Error('Animation data is missing.');
            }
        } catch (error) {
            console.error('Error in LoaderAnimation:', error);
        }
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center z-[999999] bg-white'>

            <div className='relative w-[6.25rem] aspect-square flex justify-center items-center p-5 overflow-hidden'>
                <Lottie animationData={Loader} loop={false} />
                {loadingSecond && <div className='w-[100%] h-[100%] secondLoader absolute' />}
                
            </div>
        </div>
    );
}
