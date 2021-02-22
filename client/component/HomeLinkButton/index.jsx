import React from 'react';
import { Link } from 'react-router-dom';

import './style';

const HomeLinkButton = ({ href, name, to }) => (
    <Link className='home-link-button' href={href} to={to}>
        {name}
    </Link>
);

export default HomeLinkButton;
