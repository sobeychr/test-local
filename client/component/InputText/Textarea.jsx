import React, { useState } from 'react';

import './style';

const Textarea = ({ className, onChange: onChangeParam, value, ...rest }) => {
    const [input, setInput] = useState(value);

    const isEdit = input !== value;
    const classes = [className].concat([isEdit && 'edited']).filter(Boolean);

    const onChange = ({ target: { value = '' } = {} }) => {
        setInput(value);
        onChangeParam(value);
    };

    return <textarea className={classes.join(' ')} onChange={onChange} value={input} {...rest} />;
};

export default Textarea;
