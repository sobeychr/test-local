import React, { useEffect, useMemo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import QuickNumberInput from '@component/input/QuickNumberInput';
import QuickTimeInput from '@component/input/QuickTimeInput';
import ModalForm from '@component/modal/ModalForm';
import { splitCalcTimeString } from '@module/workout/helper';

const ModalSplit = ({ onClose, show }) => {
    const [distance, setDistance] = useState('');
    const [split, setSplit] = useState('');
    const [time, setTime] = useState('');

    const onDistance = ({ target: { value = '' } }) => setDistance(value);
    const onTime = ({ target: { value = '' } }) => setTime(value);

    const onReset = () => {
        setDistance('');
        setSplit('');
        setTime('');
    };

    const onSubmit = () => {
        const splitValue = splitCalcTimeString({
            distance,
            timeString: time,
        });
        setSplit(splitValue);
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
                            maxLength={5}
                            onChange={onDistance}
                            placeholder='distance (m)'
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
                    <Col className='split'>{split}</Col>
                </Row>
            </>
        ),
        [distance, split, time],
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
            title='Calculate Split'
        />
    );
};

export default ModalSplit;
