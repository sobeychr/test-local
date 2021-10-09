import React from 'react';
import RuneIcon from './RuneIcon';

const RuneListEntry = ({ armor, level, name, weapon }) => (
    <li className='tab-rune--list--entry'>
        <span className='title'>
            <RuneIcon name={name} />
            <span className='name'>{name}</span>
        </span>
        <span className='weapon'>
            {weapon.map(entry => <span>{entry}</span>)}
        </span>
        <span className='armor'>
            {armor.map(entry => <span>{entry}</span>)}
        </span>
        <span className='level'>{level}</span>
    </li>
);

export default RuneListEntry;
