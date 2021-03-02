import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink } from 'react-bootstrap';

import TabEntry from './TabEntry';

import './style';

const Tab = ({ onChangePre, onChangePost, tabs }) => {
    const [tab, setTab] = useState(0);

    const onClick = (newTab) => () => {
        const preTab = tab;
        if (onChangePre) {
            onChangePre(preTab, newTab);
        }
        setTab(newTab);
        if (onChangePost) {
            onChangePost(preTab, newTab);
        }
    };

    return (
        <Nav variant='tabs'>
            {tabs.map((label, key) => (
                <TabEntry
                    active={key === tab}
                    disabled={key === tab}
                    key={key}
                    label={label}
                    onClick={onClick(key)}
                />
            ))}
        </Nav>
    );
};

Tab.propTypes = {
    onChangePre: PropTypes.func,
    onChangePost: PropTypes.func,
    tabs: PropTypes.arrayOf(PropTypes.string),
};

export default Tab;
