import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';

import Header from '@component/Header';
import Main from '@component/Main';
import Tab from '@component/Tab';

import { Countdown, Tabata, Timer } from './pages';

import './style';

const tabs = ['Countdown', 'Tabata', 'Timer'];

const TimerPage = () => {
    const [tab, setTab] = useState(0);

    const onChangePost = (preTab, newTab) => {
        setTab(newTab);
    };

    const Child = (tab === 0 && Countdown) || (tab === 1 && Tabata) || (tab === 2 && Timer);

    return (
        <div>
            <Header currentPage='Timer' />
            <Main>
                <Tab onChangePost={onChangePost} tabs={tabs} />
                <Child />
            </Main>
        </div>
    );
};

export default TimerPage;
