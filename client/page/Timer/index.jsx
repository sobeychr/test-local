import React from 'react';

import Header from '@component/Header';
import Main from '@component/Main';

import './style';

const TimerPage = () => (
    <div>
        <Header currentPage='Timer' />
        <Main>timer</Main>
    </div>
);

export default TimerPage;
