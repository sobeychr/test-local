import React from 'react';
import RuneIcon from '../../component/runeIcon';

const RuneIconEntry = ({ name }) => (
    <span className='rune-entry'>
        <RuneIcon name={name} />
        <span className='icon-name'>{name}</span>
    </span>
);

const RuneWordListEntry = ({ category, items, name, runeorder, stats }) => (
    <li className='entry'>
        <span className='title'>{name}</span>
        <span className='item'>{`${runeorder.length} sockets ${items.join(', ')}`}</span>
        <span className='rune'>
            {runeorder.map((name, key) => (
                <RuneIconEntry key={key} name={name} />
            ))}
        </span>
        <span className='stat'>
            {stats.map((entry, key) => (
                <span className='stat-entry' key={key}>
                    {entry}
                </span>
            ))}
        </span>
    </li>
);

export default RuneWordListEntry;
