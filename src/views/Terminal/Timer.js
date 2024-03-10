import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatDate = (date) => {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    return (
        <div>
            <p>Current Time: {currentTime.toLocaleTimeString()} {formatDate(currentTime)}</p>

        </div>
    );
};

export default Timer;