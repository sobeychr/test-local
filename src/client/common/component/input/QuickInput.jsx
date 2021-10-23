import React from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/formcontrol';
import InputGroup from 'react-bootstrap/inputgroup';

const QuickInput = ({
    maxLength,
    onChange,
    placeholder,
    size = 'sm',
    title,
    type = 'text',
    value,
}) => (
    <InputGroup size={size}>
        <InputGroup.Text>{title}</InputGroup.Text>
        <FormControl
            maxLength={maxLength}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            value={value}
        />
    </InputGroup>
);

QuickInput.propTypes = {
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
};

export default QuickInput;
