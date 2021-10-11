import React from 'react';
import PropTypes from 'prop-types';
import Rune from '@module/rune/Rune';
import RuneIcon from '../../component/runeIcon';

const RuneListEntry = ({ entry: { armor, level, name, weapon }}) => (
    <li className='entry'>
        <span className='title'>
            <RuneIcon name={name} />
            <span className='name'>{name}</span>
        </span>
        <span className='weapon'>
            {weapon.map((entry, key) => (
                <span key={key}>{entry}</span>
            ))}
        </span>
        <span className='armor'>
            {armor.map((entry, key) => (
                <span key={key}>{entry}</span>
            ))}
        </span>
        <span className='level'>{level}</span>
    </li>
);

RuneListEntry.propTypes = {
    entry: PropTypes.instanceOf(Rune).isRequired,
};

export default RuneListEntry;
