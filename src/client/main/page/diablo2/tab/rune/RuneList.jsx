import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import useRune from '@module/rune/store';
import Rune from '@module/rune/Rune';
import RuneListEntry from './RuneListEntry';

const RuneList = () => {
    const { loadRune, runes } = useRune();
    const [runeList, setRuneList] = useState([]);

    const [filter, setFitler] = useState('');

    const onChange = ({ target: { value } = {} }) => {
        setFitler(value);
        const newList = runes.filter(Rune.validateList(value));
        setRuneList(newList);
    };

    useEffect(() => {
        loadRune();
    }, []);

    useEffect(() => {
        setRuneList(runes);
    }, [runes]);

    return (
        <div>
            <div className='header'>
                <h2>Rune list</h2>
                <InputGroup size='sm'>
                    <InputGroup.Text>Filter</InputGroup.Text>
                    <FormControl
                        onChange={onChange}
                        placeholder='Rune name'
                        type='text'
                        value={filter}
                    />
                </InputGroup>
            </div>
            <ul className='list'>
                {runeList.map((entry, key) => (
                    <RuneListEntry entry={entry} key={key} />
                ))}
            </ul>
        </div>
    );
};

export default RuneList;
