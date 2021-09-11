import React from 'react';

import HomeLink from './HomeLink';
import './home.scss';

const links = [
    { background: '#b36242', href: '/parser', name: 'Parser' },
    { background: '#358219', href: '/row', name: 'Row' },
    { background: '#b39142', href: '/timer', name: 'Timer' },
];

const HomePage = () => <div>
    <h1>Local React</h1>
    <nav className='home-nav'>
        {links.map((entry, key) => <HomeLink key={key} {...entry}/>)}
    </nav>
</div>;

export default HomePage;
