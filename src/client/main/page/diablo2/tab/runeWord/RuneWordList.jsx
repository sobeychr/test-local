import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import throttle from 'lodash/throttle';
import useRune from '@module/rune/store';
import RuneWord from '@module/rune/RuneWord';
import RuneWordListEntry from './RuneWordListEntry';

const RuneWordList = () => {
    const { loadRuneWord, runewords } = useRune();
    const [runeWordList, setRuneWordList] = useState([]);

    const [filterName, setFilterName] = useState('');
    const [filterRune, setFilterRune] = useState('');
    const [filterStat, setFilterStat] = useState('');

    const onChangeName = ({ target: { value } = {} }) => setFilterName(value);
    const onChangeRune = ({ target: { value } = {} }) => setFilterRune(value);
    const onChangeStat = ({ target: { value } = {} }) => setFilterStat(value);

    useEffect(() => {
        loadRuneWord();
    }, []);

    useEffect(() => {
        setRuneWordList(runewords);
    }, [runewords]);

    useEffect(() => {
        const newList = runewords.filter(RuneWord.validateList({
            filterName,
            filterRune,
            filterStat,
        }));
        setRuneWordList(newList);
    }, [filterName, filterRune, filterStat]);

    return (
        <div>
            <div className='header'>
                <h2 className='title'>Runeword list</h2>
                <div className='filter'>
                    <div className='filter-row'>
                        <InputGroup>
                            <InputGroup.Text>Filter name</InputGroup.Text>
                            <FormControl onChange={onChangeName} value={filterName} type='text'/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Filter runes</InputGroup.Text>
                            <FormControl onChange={onChangeRune} value={filterRune} type='text'/>
                        </InputGroup>
                        <InputGroup>
                            <InputGroup.Text>Filter stat</InputGroup.Text>
                            <FormControl onChange={onChangeStat} value={filterStat} type='text'/>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <ul className='list'>
                {runeWordList.map((entry, key) => <RuneWordListEntry key={key} {...entry}/>)}
            </ul>
        </div>
    );
};

export default RuneWordList;
