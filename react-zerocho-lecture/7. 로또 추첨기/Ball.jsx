import React, { memo } from 'react';
import { number } from 'prop-types';

const Ball = memo(({ number }) => {
    let background;
    if(number <= 10) {
        background = '#fcc43e';
    } else if(number <= 20) {
        background = '#8bc6e7';
    } else if(number <= 30) {
        background = '#f18d80';
    } else if(number <= 40) {
        background = '#a7a2de';
    } else {
        background = '#6bce9d';
    }

    return (
        <div className="ball" style={{ background }} > {number}</div>
    );
});

export default Ball;