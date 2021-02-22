import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style';

const HomeLinkButton = ({ href, name, to }) => (
    <Link className='home-link-button' href={href} to={to}>
        {name}
    </Link>
);

HomeLinkButton.propTypes = {
    href: PropTypes.string,
    name: PropTypes.string.isRequired,
    to: PropTypes.string,
};

export default HomeLinkButton;
