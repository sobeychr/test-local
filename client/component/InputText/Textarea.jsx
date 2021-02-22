import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style';

const Textarea = ({ className, onChange: onChangeParam, value = '', ...rest }) => {
    const [input, setInput] = useState(value);

    const isEdit = input !== value;
    const classes = [className].concat([isEdit && 'edited']).filter(Boolean);

    const onChange = ({ target: { value = '' } = {} }) => {
        setInput(value);
        onChangeParam(value);
    };

    return <textarea className={classes.join(' ')} onChange={onChange} value={input} {...rest} />;
};

Textarea.propTypes = {
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

export default Textarea;
