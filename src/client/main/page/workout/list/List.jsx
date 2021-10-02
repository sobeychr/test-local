import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';

import Entry from './Entry';

const List = ({ workouts }) => (
    <CardGroup as='section' className='workout-list'>
        {workouts.map((current, key) => (
            <Entry current={current} key={key} next={workouts[key + 1]} />
        ))}
    </CardGroup>
);

export default List;
