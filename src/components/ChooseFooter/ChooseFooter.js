
import React, { Fragment } from 'react';
import Media from 'react-media';
import Footer from './Footer';
import MobileFooter from './MobileFooter';

export default function ChooseFooter() {

    return (
        <div>

            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 999px)",
                large_medium: "(min-width: 1000px)",
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <MobileFooter />}
                        {matches.medium && <MobileFooter />}
                        {matches.large_medium && <Footer />}
                    </Fragment>
                )}
            </Media>
        </div>
    )
}