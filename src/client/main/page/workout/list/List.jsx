import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';

import Entry from './Entry';

const List = ({ workouts }) => (
    <CardGroup as='section' className='workout-list'>
        {workouts.map((entry, key) => (
            <Entry key={key} {...entry} />
        ))}
    </CardGroup>
);

export default List;
