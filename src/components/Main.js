import React, { Fragment } from 'react';
import Media from 'react-media';
import MobileScreen from './HomepageRes/MobileScreen'
import Screen1300 from './HomepageRes/Screen1300';

export default function Main() {
    return (
        <div className="Homepage relative" id='home'>

            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 999px)",
                large_medium: "(min-width: 1000px)",
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <MobileScreen />}
                        {matches.medium && <Screen1300 />}
                        {matches.large_medium && <Screen1300 />}
                    </Fragment>
                )}
            </Media>
        </div>

    )
}