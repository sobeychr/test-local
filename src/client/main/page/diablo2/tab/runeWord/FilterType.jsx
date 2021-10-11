import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/dropdownbutton';
import DropdownItem from 'react-bootstrap/dropdownitem';

const FilterType = ({ initValue, list, onChange, title }) => {
    const [value, setValue] = useState(initValue);

    const onClick = (entry) => () => setValue(entry);

    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <InputGroup className='filter-type' size='sm'>
            <InputGroup.Text>{title}</InputGroup.Text>
            <DropdownButton title={value}>
                {list.map((entry, key) => (
                    <DropdownItem className='filter-type-entry' key={key} onClick={onClick(entry)}>
                        {entry}
                    </DropdownItem>
                ))}
            </DropdownButton>
        </InputGroup>
    );
};

FilterType.propTypes = {
    initValue: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    title: PropTypes.string,
};

export default FilterType;
