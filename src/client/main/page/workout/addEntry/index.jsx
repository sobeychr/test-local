import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/formcontrol';
import FormGroup from 'react-bootstrap/formgroup';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/modalbody';
import ModalFooter from 'react-bootstrap/modalfooter';
import ModalHeader from 'react-bootstrap/modalheader';
import ModalTitle from 'react-bootstrap/modaltitle';
import Row from 'react-bootstrap/Row';

import { timestampToString, timeStringToTimestamp } from '@util/date';

const REG_NUM = /[^\d]+/;
const REG_SPACE = /\s+$/;
const parseInput = (string) => string.replace(REG_NUM, '').replace(REG_SPACE, '');

const LENGTH_DIST = 4;
const LENGTH_TIME = 2;

const ModalAddEntry = ({ onClose, onSubmit: onSubmitProp, show }) => {
    const [calory, setCalory] = useState('');
    const [distance, setDistance] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');
    const [split, setSplit] = useState('');
    const [stroke, setStroke] = useState('');
    const [watt, setWatt] = useState('');

    const onChange =
        (func) =>
        ({ target: { value = '' } }) => {
            const parseValue = parseInput(value);
            func(parseValue);
        };

    const onReset = () => {
        setCalory('');
        setDistance('');
        setMinute('');
        setSecond('');
        setSplit('');
        setStroke('');
        setWatt('');
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

        onSubmitProp({
            calory: parseInt(calory, 10),
            distance: parseInt(distance, 10),
            stroke: parseInt(stroke, 10),
            time: parseInt(minute, 10) * 60 + parseInt(second, 10),
            watt: parseInt(watt, 10),
        });
    };

    useEffect(() => {
        // onReset();
    }, [show]);

    return (
        <Modal className='modal-addEntry' show={show} onHide={onClose}>
            <ModalHeader closeButton>
                <ModalTitle>Add Entry</ModalTitle>
            </ModalHeader>
            <Form onSubmit={onSubmit}>
                <ModalBody>
                    <Row>
                        <Col>
                            <FormControl
                                maxLength='2'
                                onChange={onChange(setStroke)}
                                placeholder='Stroke per min'
                                type='text'
                                value={stroke}
                            />
                        </Col>
                        <Col>
                            <FormControl
                                maxLength='3'
                                onChange={onChange(setWatt)}
                                placeholder='Avg. Watts'
                                type='text'
                                value={watt}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormControl
                                maxLength={LENGTH_TIME}
                                onChange={onChange(setMinute)}
                                placeholder='minutes'
                                type='text'
                                value={minute}
                            />
                        </Col>
                        <Col>
                            <FormControl
                                maxLength={LENGTH_TIME}
                                onChange={onChange(setSecond)}
                                placeholder='seconds'
                                type='text'
                                value={second}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormControl
                                maxLength={LENGTH_DIST}
                                onChange={onChange(setDistance)}
                                placeholder='distance (m)'
                                type='text'
                                value={distance}
                            />
                        </Col>
                        <Col>
                            <FormControl
                                maxLength='4'
                                onChange={onChange(setCalory)}
                                placeholder='calories'
                                type='text'
                                value={calory}
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

export default ModalAddEntry;
