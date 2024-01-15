import React, { useEffect } from 'react';

const CustomCursorComponent = () => {
    useEffect(() => {
        const coords = { x: 0, y: 0 };
        const circles = document.querySelectorAll(".circle");

        const colors = [
            "#e5foff",
            "#e5foff",
            "#e5foff",
            "#e5foff",
            "#e5foff",
            "#e5foff",

            "#9DBFF9",
            "#9DBFF9",
            "#9DBFF9",
            "#9DBFF9",
            "#9DBFF9",
            "#9DBFF9",

            "#5b8def",
            "#5b8def",
            "#5b8def", 
            "#5b8def",
            "#5b8def",
            "#5b8def",

            "#3e7bfa",
            "#3e7bfa",
            "#3e7bfa",
            "#3e7bfa",
            "#3e7bfa",
            "#3e7bfa",

            "#004FC4",
            "#004FC4",
            "#004FC4",
            "#004FC4",
            "#004FC4",
            "#004FC4",

        ];

        circles.forEach(function (circle, index) {
            circle.x = 0;
            circle.y = 0;
            circle.style.backgroundColor = colors[ index % colors.length ];
        });

        window.addEventListener("mousemove", function (e) {
            coords.x = e.clientX;
            coords.y = e.clientY;
        });

        function animateCircles() {
            let x = coords.x;
            let y = coords.y;

            circles.forEach(function (circle, index) {
                circle.style.left = x - 5 + "px";
                circle.style.top = y - 5 + "px";

                circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

                circle.x = x;
                circle.y = y;

                const nextCircle = circles[ index + 1 ] || circles[ 0 ];
                x += (nextCircle.x - x) * 0.5;
                y += (nextCircle.y - y) * 0.5;
            });

            requestAnimationFrame(animateCircles);
        }

        animateCircles();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("mousemove", function (e) {
                coords.x = e.clientX;
                coords.y = e.clientY;
            });
        };
    }, []);

    return (
        <div>

        </div>
    );
};

export default CustomCursorComponent;
