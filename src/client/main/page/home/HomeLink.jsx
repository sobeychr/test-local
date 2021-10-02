import React from 'react';
import { Link } from 'react-router-dom';

import Hexagon from '@icon/hexagon';

const HomeLink = ({ background, href, name }) => (
    <Link className='home-link' to={href}>
        <span>{name}</span>
        <Hexagon background={background} />
    </Link>
);

export default HomeLink;
