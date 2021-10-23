/* eslint-disable */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/formcontrol';
import InputGroup from 'react-bootstrap/inputgroup';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/modalbody';
import ModalFooter from 'react-bootstrap/modalfooter';
import ModalHeader from 'react-bootstrap/modalheader';
import ModalTitle from 'react-bootstrap/modaltitle';
import Row from 'react-bootstrap/Row';

import { splitCalc } from '@module/workout/helper';
import { timestampToString, timeStringToTimestamp } from '@util/date';
import { stripNonNumber } from '@util/string';

const ModalSplit = ({ onClose, show }) => {
    const [distance, setDistance] = useState('');
    const [split, setSplit] = useState('');
    const [time, setTime] = useState('');

    const onDistance = ({ target: { value = '' } }) => {
        setDistance(stripNonNumber(value));
    };

    const onTime = ({ target: { value = '' } }) => {
        const parsedValue = stripNonNumber(value)
            .split('')
            .reverse()
            .map((entry, key) => `${entry}${key > 0 && key % 2 === 0 ? ':' : ''}`)
            .reverse()
            .join('');
        setTime(parsedValue);
    };

    const onReset = () => {
        setDistance('');
        setSplit('');
        setTime('');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const calc = splitCalc({
            distance,
            duration: timeStringToTimestamp(time),
        });
        const timestring = timestampToString(calc);
        setSplit(timestring);
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
                            <InputGroup size='sm'>
                                <InputGroup.Text>Distance (m)</InputGroup.Text>
                                <FormControl
                                    maxLength={5}
                                    onChange={onDistance}
                                    placeholder='distance (m)'
                                    type='text'
                                    value={distance}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup size='sm'>
                                <InputGroup.Text>Time (hh:mm:ss)</InputGroup.Text>
                                <FormControl
                                    maxLength={8}
                                    onChange={onTime}
                                    placeholder='00:00:00'
                                    type='text'
                                    value={time}
                                />
                            </InputGroup>
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
