import React, { useEffect } from 'react';
import anime from 'animejs';

const ShuffleText = ({ text }) => {
    const randomChar = () => {
        const possible =
            "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        return possible.charAt(Math.floor(Math.random() * possible.length));
    };

    const mask = (chars, progress) => {
        const masked = [];

        for (let i = 0; i < chars.length; i++) {
            const position = (i + 1) / chars.length;
            if (position > progress) {
                masked.push(randomChar());
            } else {
                masked.push(chars[ i ]);
            }
        }

        return masked.join('');
    };

    useEffect(() => {
        const chars = text.split('');

        const params = {
            progress: 0,
        };

        const animation = anime({
            targets: params,
            progress: 1,
            delay: 1000,
            duration: 1000,
            easing: 'easeInQuad',
            update: () => {
                setText(mask(chars, params.progress));
            },
            complete: () => {
                setText(text);
                setCompleted(true);
            },
        });

        const handleClick = () => {
            setCompleted(false);
            animation.restart();
        };

        const interval = setInterval(() => {
            if (!completed) {
                animation.pause();
                handleClick();
            }
        }, 5000);

        return () => {
            clearInterval(interval);
            animation.pause();
        };
    }, [ text, completed ]);

    const [ completed, setCompleted ] = React.useState(false);
    const [ text, setText ] = React.useState(text);

    return (
        <span
            className={`shuffle ${completed ? 'completed' : ''}`}
            onClick={() => handleClick()}
        >
            {text}
        </span>
    );
};

const App = () => {
    const names = [ 'John', 'Batman', 'Ironman' ];

    return (
        <div className="fullheight">
            <div className="fullheight-body">
                {names.map((name, index) => (
                    <p key={index}>
                        <ShuffleText text={`I am ${name}`} />
                    </p>
                ))}
            </div>
        </div>
    );
};

export default App;
