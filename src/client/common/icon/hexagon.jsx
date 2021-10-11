import React from 'react';
import PropTypes from 'prop-types';

const Hexagon = ({ background, borderColor, borderWidth }) => (
    <svg viewBox='0 0 100 100'>
        <polygon
            points='50 3,100 28,100 75, 50 100,3 75,3 25'
            fill={background}
            stroke={borderColor}
            strokeWidth={borderWidth}
        />
    </svg>
);

Hexagon.propTypes = {
    background: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
};

export default Hexagon;
