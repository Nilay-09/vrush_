import React, { useEffect } from 'react';

const BlockRightClick = () => {
    useEffect(() => {
        const preventContextMenu = (event) => {
            event.preventDefault();
        };

        const preventImageDrag = (event) => {
            event.preventDefault();
        };

        document.addEventListener('contextmenu', preventContextMenu);

        const images = document.querySelectorAll('img');
        images.forEach((image) => {
            image.addEventListener('dragstart', preventImageDrag);
        });

        return () => {
            document.removeEventListener('contextmenu', preventContextMenu);
            images.forEach((image) => {
                image.removeEventListener('dragstart', preventImageDrag);
            });
        };
    }, []);

    return (
        <div>

        </div>
    );
};

export default BlockRightClick;
