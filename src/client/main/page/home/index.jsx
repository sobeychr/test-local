import React from 'react';

import HomeLink from './HomeLink';
import './home.scss';

const links = [
    { background: '#750000', href: '/diablo2', name: 'Diablo 2' },
    { background: '#b36242', href: '/parser', name: 'Parser' },
    { background: '#b39142', href: '/timer', name: 'Timer' },
    { background: '#358219', href: '/workout', name: 'Workout' },
];

const HomePage = () => (
    <div>
        <h1>Local React</h1>
        <nav className='home-nav'>
            {links.map((entry, key) => (
                <HomeLink key={key} {...entry} />
            ))}
        </nav>
    </div>
);

export default HomePage;
