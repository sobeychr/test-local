import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Header from '@component/header';

import { RuneTab, SetTab, UniqueTab } from './tab';

const tabs = [
    {
        Component: RuneTab,
        name: 'Runes',
    },
    {
        Component: SetTab,
        name: 'Sets',
    },
    {
        Component: UniqueTab,
        name: 'Uniques',
    },
];

const Diablo2Page = () => {
    const tabComponents = tabs.map(({ Component, name }, key) => (
        <Tab eventKey={name.toLowerCase()} key={key} title={name}>
            <Component />
        </Tab>
    ));

    return (
        <div>
            <Header page='Diablo 2' />
            <Tabs>{tabComponents}</Tabs>
        </div>
    );
};

export default Diablo2Page;
