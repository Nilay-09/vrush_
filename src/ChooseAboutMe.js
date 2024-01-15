import React, { Fragment } from 'react';
import Media from 'react-media';
import AboutMe from './AboutMe';
import MobileAboutMe from './MobileAboutMe';

export default function ChooseAboutMe() {
    return (
        <div className="Homepage min-h-screen relative">

            <Media queries={{
                small: "(max-width: 599px)",
                others: "(min-width: 600px)",
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <MobileAboutMe />}
                        {matches.others && <AboutMe />}
                    </Fragment>
                )}
            </Media>
        </div>
    )
}
