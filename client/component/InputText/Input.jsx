import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style';

const Input = ({ className, onChange: onChangeParam, value = '', ...rest }) => {
    const [input, setInput] = useState(value);

    const isEdit = input !== value;
    const classes = (Array.isArray(className) ? className : [className])
        .concat([isEdit && 'edited'])
        .filter(Boolean);

    const onChange = ({ target: { value = '' } = {} }) => {
        setInput(value);
        if (onChangeParam) {
            onChangeParam(value);
        }
    };

    return <input className={classes.join(' ')} onChange={onChange} value={input} {...rest} />;
};

Input.propTypes = {
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    onChange: PropTypes.func,
    value: PropTypes.string,
};

export default Input;
