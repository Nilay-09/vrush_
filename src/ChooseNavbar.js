import React, { Fragment } from 'react';
import Media from 'react-media';
import Navbar from './components/Navbar';
import MobileNavbar from './MobileNavbar';

export default function ChooseNavbar() {
    return (
        <div className="Homepage relative z-[9998]" >

            <Media queries={{
                small: "(max-width: 699px)",
                others: "(min-width: 700px)",
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <MobileNavbar/>}
                        {matches.others && <Navbar />}
                    </Fragment>
                )}
            </Media>
        </div>
    )
}