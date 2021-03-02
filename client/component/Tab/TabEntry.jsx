import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'react-bootstrap';

const TabEntry = ({ label, ...rest }) => {
    return (
        <NavItem>
            <NavLink {...rest}>{label}</NavLink>
        </NavItem>
    );
};

TabEntry.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string,
    onCLick: PropTypes.func,
};

export default TabEntry;
