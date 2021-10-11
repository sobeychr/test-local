import React from 'react';
import RuneIcon from '../../component/runeIcon';

const RuneListEntry = ({ armor, level, name, weapon }) => (
    <li className='entry'>
        <span className='title'>
            <RuneIcon name={name} />
            <span className='name'>{name}</span>
        </span>
        <span className='weapon'>
            {weapon.map((entry, key) => <span key={key}>{entry}</span>)}
        </span>
        <span className='armor'>
            {armor.map((entry, key) => <span key={key}>{entry}</span>)}
        </span>
        <span className='level'>{level}</span>
    </li>
);

export default RuneListEntry;
