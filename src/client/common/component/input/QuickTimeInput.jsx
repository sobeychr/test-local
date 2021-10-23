import React from 'react';
import PropTypes from 'prop-types';
import { stripNonNumber } from '@util/string';
import QuickInput from './QuickInput';

const QuickTimeInput = ({
    onChange: onChangeProp,
    placeholder = '00:00:00',
    title = 'Time (hh:mm:ss)',
    ...props
}) => {
    const onChange = (event) => {
        const {
            target,
            target: { value },
        } = event;
        const parsedValue = stripNonNumber(value)
            .split('')
            .reverse()
            .map((entry, key) => `${entry}${key > 0 && key % 2 === 0 ? ':' : ''}`)
            .reverse()
            .join('');

        onChangeProp({
            ...event,
            target: {
                ...target,
                value: parsedValue,
            },
        });
    };

    return (
        <QuickInput
            maxLength={8}
            onChange={onChange}
            placeholder={placeholder}
            title={title}
            type='text'
            {...props}
        />
    );
};

QuickTimeInput.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    title: PropTypes.string,
};

export default QuickTimeInput;
