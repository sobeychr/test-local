import React, { useState } from 'react';

import './style';

const Textarea = ({ onChange: onChangeParam, value }) => {
    const [input, setInput] = useState(value);

    const isEdit = input === value;
    const classes = [isEdit && 'edited'];

    const onChange = ({ target: { value = '' } = {} }) => {
        setInput(value);
        onChangeParam(value);
    };

    return <textarea className={classes} onChange={onChange} value={input} />;
};

export default Textarea;
