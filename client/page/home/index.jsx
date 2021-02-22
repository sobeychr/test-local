import React from 'react';

import Header from '@component/Header';
import Main from '@component/Main';
import HomeLinkButton from '@component/HomeLinkButton';

import './style';

const links = [
    {
        name: 'parser',
        to: '/parser',
    },
    {
        name: 'sort',
        to: '/sort',
    },
    {
        name: 'timer',
        to: '/timer',
    },
];

const HomePage = () => (
    <div>
        <Header currentPage='Home' />
        <Main className='main-home'>
            {links.map((link, key) => (
                <HomeLinkButton key={key} {...link} />
            ))}
        </Main>
    </div>
);

export default HomePage;
