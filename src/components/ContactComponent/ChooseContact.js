import React, { Fragment } from 'react';
import Media from 'react-media';
import ContactMe from './ContactMe'
import MobileContact from './MobileContact';

export default function ChooseContact() {

    return (
        <div>

            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 999px)",
                large_medium: "(min-width: 1000px)",
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <MobileContact />}
                        {matches.medium && <MobileContact />}
                        {matches.large_medium && <ContactMe />}
                    </Fragment>
                )}
            </Media>
        </div>
    )
}
