import React from 'react';

import Hexagon from '@icon/hexagon';

const HomeLink = ({ background, href, name }) => (
    <a className='home-link' href={href}>
        <span>{name}</span>
        <Hexagon background={background} />
    </a>
);

export default HomeLink;
