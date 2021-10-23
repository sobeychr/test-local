import React, { useEffect, useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import QuickNumberInput from '@component/input/QuickNumberInput';
import QuickTimeInput from '@component/input/QuickTimeInput';
import ModalForm from '@component/modal/ModalForm';
import { splitCalcTimeString } from '@module/workout/helper';
import Workout from '@module/workout/Workout';

const ModalAddEntry = ({ onClose, onSubmit: onSubmitProp, show }) => {
    const [calory, setCalory] = useState('');
    const [distance, setDistance] = useState('');
    const [split, setSplit] = useState('');
    const [stroke, setStroke] = useState('');
    const [time, setTime] = useState('');
    const [watt, setWatt] = useState('');

    const onCalory = ({ target: { value = '' } }) => setCalory(value);
    const onDistance = ({ target: { value = '' } }) => setDistance(value);
    const onStroke = ({ target: { value = '' } }) => setStroke(value);
    const onTime = ({ target: { value = '' } }) => setTime(value);
    const onWatt = ({ target: { value = '' } }) => setWatt(value);

    const onReset = () => {
        setCalory('');
        setDistance('');
        setStroke('');
        setSplit('');
        setTime('');
        setWatt('');
    };

    const onSubmit = () => {
        onSubmitProp(
            new Workout({
                calory,
                date: new Date().getTime(),
                distance,
                stroke,
                time,
                watt,
            }),
        );
    };

    useEffect(() => {
        onReset();
    }, [show]);

    const body = useMemo(
        () => (
            <>
                <Row>
                    <Col>
                        <QuickNumberInput
                            maxLength={3}
                            onChange={onStroke}
                            placeholder='spm'
                            title='Stroke per min'
                            value={stroke}
                        />
                    </Col>
                    <Col>
                        <QuickNumberInput
                            maxLength={4}
                            onChange={onWatt}
                            placeholder='watt'
                            title='Avg. Watts'
                            value={watt}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <QuickNumberInput
                            maxLength={5}
                            onChange={onDistance}
                            placeholder='dist'
                            title='Distance (m)'
                            value={distance}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <QuickTimeInput onChange={onTime} value={time} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <QuickNumberInput
                            maxLength={4}
                            onChange={onCalory}
                            placeholder='cals'
                            title='Calories'
                            value={calory}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='split'>{split}</Col>
                </Row>
            </>
        ),
        [calory, distance, split, stroke, time, watt],
    );

    const footer = useMemo(
        () => (
            <>
                <Button onClick={onReset} type='reset' variant='secondary'>
                    Clear
                </Button>
                <Button type='submit' variant='primary'>
                    Submit
                </Button>
            </>
        ),
        [],
    );

    return (
        <ModalForm
            body={body}
            className='modal-split'
            footer={footer}
            hasFormWrapper
            onClose={onClose}
            onSubmit={onSubmit}
            show={show}
            title='Add Entry'
        />
    );
};

export default ModalAddEntry;
