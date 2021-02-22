import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import Header from '@component/Header';
import Main from '@component/Main';
import Textarea from '@component/InputText/Textarea';

import { base64, charcode, urlencode } from '@util/encode';

import ButtonRow from './child/ButtonRow';

import './style';

const buttons = [
    {
        func: base64,
        label: 'Base64',
        on: true,
        off: true,
    },
    {
        func: charcode,
        label: 'Charcode',
        on: true,
        off: true,
    },
    /*
    {
        func: jsonencode,
        label: 'JSon',
        on: true,
    },
    */
    {
        func: urlencode,
        label: 'Url',
        on: true,
        off: true,
    },
];

const ParserPage = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const onChange = (value) => setInput(value);

    const onClick = (func, label, isEncode) => {
        const newValue = func(input, isEncode);
        setOutput(newValue);
        console.log('Parser', {
            label,
            isEncode,
            input,
            newValue,
        });
    };

    const entries = buttons.map((entry, key) => (
        <ButtonRow key={key} onClick={onClick} {...entry} />
    ));

    return (
        <div>
            <Header currentPage='Parser' />
            <Main className='main-parser'>
                <Row>
                    <Col as='ul' className='buttons' sm={4}>
                        {entries}
                    </Col>
                    <Col>
                        <Textarea className='input' onChange={onChange} value={''} />
                    </Col>
                </Row>
                <Row className='bottom'>
                    <Col>
                        <pre className='output'>{output}</pre>
                    </Col>
                </Row>
            </Main>
        </div>
    );
};

export default ParserPage;
