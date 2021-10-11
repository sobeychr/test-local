import React from 'react';
import PropTypes from 'prop-types';
import RuneWord from '@module/rune/RuneWord';
import RuneIcon from '../../component/runeIcon';

const RuneIconEntry = ({ name }) => (
    <span className='rune-entry'>
        <RuneIcon name={name} />
        <span className='icon-name'>{name}</span>
    </span>
);

RuneIconEntry.propTypes = {
    name: PropTypes.string,
};

const RuneWordListEntry = ({ entry: { items, name, runeorder, stats } }) => (
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

RuneWordListEntry.propTypes = {
    entry: PropTypes.instanceOf(RuneWord).isRequired,
};

export default RuneWordListEntry;
