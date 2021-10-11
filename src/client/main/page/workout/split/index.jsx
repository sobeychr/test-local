/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/formcontrol';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/modalbody';
import ModalFooter from 'react-bootstrap/modalfooter';
import ModalHeader from 'react-bootstrap/modalheader';
import ModalTitle from 'react-bootstrap/modaltitle';
import Row from 'react-bootstrap/Row';

import { timestampToString, timeStringToTimestamp } from '@util/date';
// import { chunk } from '@util/string';

// import splitCalc from '../splitCalc';

const REG_NUM = /[^\d]+/;
const REG_SPACE = /\s+$/;
const parseInput = (string) => string.replace(REG_NUM, '').replace(REG_SPACE, '');

const LENGTH_DIST = 4;
const LENGTH_TIME = 2;

const ModalSplit = ({ onClose, show }) => {
    const [distance, setDistance] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');
    const [split, setSplit] = useState('');

    const onDistance = ({ target: { value = '' } }) => {
        const parseValue = parseInput(value);
        setDistance(parseValue);
    };

    const onMinute = ({ target: { value = '' } }) => {
        const parseValue = parseInput(value);
        setMinute(parseValue);
    };

    const onSecond = ({ target: { value = '' } }) => {
        const parseValue = parseInput(value);
        setSecond(parseValue);
    };

    const onReset = () => {
        setDistance('');
        setSplit('');
        setMinute('');
        setSecond('');
    };

    const onSubmit = (e) => {
        e.preventDefault();

        /*
        const splitTime = splitCalc({
            distance,
            minute,
            second,
        });
        setSplit(timestampToString(splitTime, true));
        */
        splitTime = 'ttt';
    };

    useEffect(() => {
        onReset();
    }, [show]);

    return (
        <Modal className='modal-split' show={show} onHide={onClose}>
            <ModalHeader closeButton>
                <ModalTitle>Calculate Split</ModalTitle>
            </ModalHeader>
            <Form onSubmit={onSubmit}>
                <ModalBody>
                    <Row>
                        <Col>
                            <FormControl
                                maxLength={LENGTH_DIST}
                                onChange={onDistance}
                                placeholder='distance (m)'
                                type='text'
                                value={distance}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormControl
                                maxLength={LENGTH_TIME}
                                onChange={onMinute}
                                placeholder='minutes'
                                type='text'
                                value={minute}
                            />
                        </Col>
                        <Col>
                            <FormControl
                                maxLength={LENGTH_TIME}
                                onChange={onSecond}
                                placeholder='seconds'
                                type='text'
                                value={second}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='split'>{split}</Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onReset} type='reset' variant='secondary'>
                        Clear
                    </Button>
                    <Button type='submit' variant='primary'>
                        Submit
                    </Button>
                </ModalFooter>
            </Form>
        </Modal>
    );
};

export default ModalSplit;
