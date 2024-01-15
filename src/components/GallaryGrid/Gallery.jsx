import React from 'react';

import { NavLink } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// Import images using destructuring assignment
import div1 from '../imgs/galleryImg/div1.jpg';
import div2 from '../imgs/galleryImg/div2.jpg';
import div3 from '../imgs/galleryImg/div3.jpg';
import div4 from '../imgs/galleryImg/div4.jpg';
import div5 from '../imgs/galleryImg/div5.jpg';
import div6 from '../imgs/galleryImg/div6.jpg';
import div7 from '../imgs/galleryImg/div7.jpg';
import div8 from '../imgs/galleryImg/div8.jpg';
import div9 from '../imgs/galleryImg/div9.jpg';
import div10 from '../imgs/galleryImg/div10.jpg';
import div11 from '../imgs/galleryImg/div11.jpg';
import div12 from '../imgs/galleryImg/div12.jpg';
import div13 from '../imgs/galleryImg/div13.jpg';
import div14 from '../imgs/galleryImg/div14.jpg';
import div15 from '../imgs/galleryImg/div15.jpg';
import div16 from '../imgs/galleryImg/div16.jpg';
import div17 from '../imgs/galleryImg/div17.jpg';
import div18 from '../imgs/galleryImg/div18.jpg';
import div19 from '../imgs/galleryImg/div19.jpg';
import div20 from '../imgs/galleryImg/div20.jpg';
import div21 from '../imgs/galleryImg/div21.jpg';




import BackArrow from '../imgs/GalleryImgFolder/Back.svg'

import ChooseFooter from '../ChooseFooter/ChooseFooter';
// import BlockRightClick from '../BlockRightClick';




const mediaData = [ div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div13, div14, div15, div16, div17, div12, div18, div19, div20, div21 ];




function Gallery() {


    return (
        <PhotoProvider
        >
            {/* <BlockRightClick /> */}
            <div className='w-full h-full px-6 md:px-[7.5rem] py-[2rem]'>
                <NavLink to="/">
                    <img
                        src={BackArrow}
                        alt={`BackArrow`}
                        className='w-18 h-14'
                    />
                </NavLink>

                <div className='mt-[3.75rem] flex flex-col gap-6'>
                    <div className='max-w-[56.25rem]'>
                        <span className="text-[#555770] text-[2.75rem] font-bold font-PT-Serif leading-[3.6575rem]">
                            I hope exploring this gallery will bring you more than just
                        </span>
                        <span className="text-[#6698FA] text-[44px] font-bold font-PT-Serif leading-[3.6575rem]">&nbsp;eye candy.
                        </span>
                    </div>

                </div>


                {/* Grid */}
                <div className='w-full'>
                    <div className='grid-gallery mx-auto mt-10'>
                        {mediaData.map((media, index) => (

                            <PhotoView key={index} src={media}>
                                <div key={index} className='grid-item a border-none'>
                                    <img
                                        src={media}
                                        alt={`GalleryImage ${index + 1}`}
                                        className='rounded-md' />
                                </div>
                            </PhotoView>
                        ))}
                    </div>
                </div>

            </div>
            <ChooseFooter />
        </PhotoProvider>
    );
}

export default Gallery;
