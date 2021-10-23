import React from 'react';
import PropTypes from 'prop-types';
import { stripNonNumber } from '@util/string';
import QuickInput from './QuickInput';

const QuickNumberInput = ({ onChange: onChangeProp, ...props }) => {
    const onChange = (event) => {
        const {
            target,
            target: { value },
        } = event;
        onChangeProp({
            ...event,
            target: {
                ...target,
                value: stripNonNumber(value),
            },
        });
    };

    return <QuickInput onChange={onChange} type='text' {...props} />;
};

QuickNumberInput.propTypes = {
    onChange: PropTypes.func,
};

export default QuickNumberInput;
