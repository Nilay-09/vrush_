import React, { Fragment } from 'react';
import Media from 'react-media';
import Project from './Project';
import MobileProjects from './MobileProjects';




export default function ChooseProject() {

    return (
        <div>

            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 999px)",
                large_medium: "(min-width: 1000px)",
            }}>
                {matches => (
                    <Fragment>
                        {matches.small && <MobileProjects />}
                        {matches.medium && <MobileProjects />}
                        {matches.large_medium && <Project />}
                    </Fragment>
                )}
            </Media>
        </div>
    )
}
