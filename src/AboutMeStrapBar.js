import React, { useEffect } from 'react';

import I1 from './components/imgs/AboutStrapImgs/NilayStrapBar/Express.svg';
import I2 from './components/imgs/AboutStrapImgs/NilayStrapBar/Git.svg';
import I3 from './components/imgs/AboutStrapImgs/NilayStrapBar/JS.svg';
import I4 from './components/imgs/AboutStrapImgs/NilayStrapBar/Java.svg';
import I5 from './components/imgs/AboutStrapImgs/NilayStrapBar/Joot.svg';
import I6 from './components/imgs/AboutStrapImgs/NilayStrapBar/Meta.svg';
import I7 from './components/imgs/AboutStrapImgs/NilayStrapBar/MongoDB.svg';
import I8 from './components/imgs/AboutStrapImgs/NilayStrapBar/Node.svg';
import I9 from './components/imgs/AboutStrapImgs/NilayStrapBar/React.svg';
import I10 from './components/imgs/AboutStrapImgs/NilayStrapBar/S.svg';
import I11 from './components/imgs/AboutStrapImgs/NilayStrapBar/Salesforce.svg';
import I12 from './components/imgs/AboutStrapImgs/NilayStrapBar/angula.svg';


const iS = [ I1, I2, I3, I4, I5, I6, I7, I8, I9, I10, I11, I12 ];

// eslint-disable-next-line 
export default function AboutMeStrapBar() {

    useEffect(() => {
        // Vanilla JS code here
        const scrollers = document.querySelectorAll(".scroller");


        scrollers.forEach((scroller) => {
            // add data-animated="true" to every `.scroller` on the page
            scroller.setAttribute("data-animated", true);

            // Make an array from the elements within `.scroller-inner`
            const scrollerInner = scroller.querySelector(".scroller__inner");
            const scrollerContent = Array.from(scrollerInner.children);

            // For each item in the array, clone it
            // add aria-hidden to it
            // add it into the `.scroller-inner`
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                duplicatedItem.setAttribute("aria-hidden", true);
                scrollerInner.appendChild(duplicatedItem);
            });
        });


    }, []);


    return (
        <div className="px-[1.5rem] md:px-0 relative overflow-hidden flex justify-center">
            <div className="w-full lg:w-[90vw] h-fit px-6 py-4 lg:px-[7.5rem] lg:py-0  my-5 scroller data-speed='fast'">
                <div className="w-full relative flex justify-start md:justify-center items-center gap-[4rem] overflow-hidden lg:gap-[3rem] py-2 scroller__inner">
                    {iS.map((i, index) => (
                        <div key={index} className="min-w-[6rem] flex">
                            <img src={i} alt={`I${index + 1}`} className="w-full h-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
