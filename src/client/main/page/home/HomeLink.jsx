import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Hexagon from '@icon/Hexagon';

const HomeLink = ({ background, href, name }) => (
    <Link className='home-link' to={href}>
        <span>{name}</span>
        <Hexagon background={background} />
    </Link>
);

HomeLink.propTypes = {
    background: PropTypes.string,
    href: PropTypes.string,
    name: PropTypes.string,
};

export default HomeLink;
