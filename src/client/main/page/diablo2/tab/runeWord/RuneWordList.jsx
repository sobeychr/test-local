import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import throttle from 'lodash/throttle';
import useRune from '@module/rune/store';
import RuneWord from '@module/rune/RuneWord';
import FilterType from './FilterType';
import RuneWordListEntry from './RuneWordListEntry';

const RuneWordList = () => {
    const { loadRuneWord, runewords } = useRune();
    const [runeWordList, setRuneWordList] = useState([]);

    const { defaultCategory, categories: listCategory, defaultItem, items: listItems } = RuneWord;

    const [filterCategory, setFilterCategory] = useState(defaultCategory);
    const [filterItem, setFilterItem] = useState(defaultItem);
    const [filterName, setFilterName] = useState('');
    const [filterRune, setFilterRune] = useState('');
    const [filterStat, setFilterStat] = useState('');

    const onChangeCategory = (value) => setFilterCategory(value);
    const onChangeItem = (value) => setFilterItem(value);
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
        const newList = runewords.filter(
            RuneWord.validateList({
                filterCategory,
                filterItem,
                filterName,
                filterRune,
                filterStat,
            }),
        );
        setRuneWordList(newList);
    }, [filterCategory, filterItem, filterName, filterRune, filterStat]);

    return (
        <div>
            <div className='header'>
                <h2 className='title'>Runeword list</h2>
                <div className='filter'>
                    <div className='filter-row'>
                        <InputGroup size='sm'>
                            <InputGroup.Text>Filter name</InputGroup.Text>
                            <FormControl
                                onChange={onChangeName}
                                placeholder='Runeword name'
                                type='text'
                                value={filterName}
                            />
                        </InputGroup>
                        <InputGroup size='sm'>
                            <InputGroup.Text>Filter runes</InputGroup.Text>
                            <FormControl
                                onChange={onChangeRune}
                                placeholder='Rune name'
                                type='text'
                                value={filterRune}
                            />
                        </InputGroup>
                        <InputGroup size='sm'>
                            <InputGroup.Text>Filter stat</InputGroup.Text>
                            <FormControl
                                onChange={onChangeStat}
                                placeholder='Stat property'
                                type='text'
                                value={filterStat}
                            />
                        </InputGroup>
                    </div>
                    <div className='filter-row'>
                        <InputGroup className='dropdown' size='sm'>
                            <FilterType
                                initValue={defaultItem}
                                list={listItems}
                                onChange={onChangeItem}
                                title='Filter item'
                            />
                        </InputGroup>
                        <InputGroup className='dropdown' size='sm'>
                            <FilterType
                                initValue={defaultCategory}
                                list={listCategory}
                                onChange={onChangeCategory}
                                title='Filter category'
                            />
                        </InputGroup>
                    </div>
                </div>
            </div>
            <ul className='list'>
                {runeWordList.map((entry, key) => (
                    <RuneWordListEntry key={key} {...entry} />
                ))}
            </ul>
        </div>
    );
};

export default RuneWordList;
