import React from 'react';

const RuneListEntry = ({ armor, level, name, weapon }) => (
    <li className='tab-rune--list--entry'>
        <span className='title'>
            <span className={`icon icon-rune${name}`}></span>
            <span className='name'>{name}</span>
        </span>
        <span className='weapon'>{weapon}</span>
        <span className='armor'>{armor}</span>
        <span className='level'>{level}</span>
    </li>
);

export default RuneListEntry;
