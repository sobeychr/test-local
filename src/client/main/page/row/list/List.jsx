import React from 'react';

import Entry from './Entry';

const List = ({ workouts }) => <section>
    {workouts.map((entry, key) => <Entry key={key} {...entry} />)}
</section>

export default List;
