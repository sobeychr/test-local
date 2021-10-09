import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import throttle from 'lodash/throttle';
import useRune from '@module/rune/store';
import RuneListEntry from './RuneListEntry';

const cssId = 'runelist-css-styles';
const cssLink = './diablo2/runes.css';

const RuneList = () => {
    const { isRuneLoaded, loadRune, runes } = useRune();
    const [isLoading, setIsLoading] = useState(false);

    const [filter, setFitler] = useState('');
    const [runeList, setRuneList] = useState([]);

    const onChange = ({ target: { value } = {} }) => {
        setFitler(value);

        const newList = runes.filter(({ name }) => name.toLowerCase().includes(value));
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
            <div className='tab-rune--header'>
                <h2>Rune list</h2>
                <InputGroup>
                    <InputGroup.Text id='ttt'>Filter</InputGroup.Text>
                    <FormControl onChange={onChange} value={filter} type='text'/>
                </InputGroup>
            </div>
            <ul className='tab-rune--list'>
                {runeList.map((entry, key) => <RuneListEntry key={key} {...entry} />)}
            </ul>
        </div>
    );
};

export default RuneList;
