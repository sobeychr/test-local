import React from 'react';

const Button = ({ children, disabled, onClick, variant = 'primary' }) => {
    const classes = ['btn', `btn-${variant}`];

    return (
        <button className={classes.join(' ')} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
