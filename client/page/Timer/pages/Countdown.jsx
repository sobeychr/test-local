import React, { useEffect, useState } from 'react';
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';

import Input from '@component/InputText/Input';
import { FORMAT_MMSS, stringToTime, timeToString } from '@util/time';

import './countdownStyle';

const DEFAULT_TIME = '05:00';

const Countdown = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(DEFAULT_TIME);

    const buttonLabel = isRunning ? 'End' : 'Start';
    const buttonVariant = isRunning ? 'danger' : 'success';

    const fTick = () => {
        const timeAsTime = stringToTime(time, FORMAT_MMSS);
        const newTime = timeAsTime - 1;
        const newTimeAsString = timeToString(newTime, FORMAT_MMSS);
        setTime(newTimeAsString);
    };

    const onChange = (e) => {
        const { target: { value } = {} } = e;
        setTime(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsRunning(!isRunning);
    };

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(fTick, 1000);
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    return (
        <Form className='countdown' onSubmit={onSubmit}>
            <Row>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Duration</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            disabled={isRunning}
                            id='duration'
                            onChange={onChange}
                            pattern='\d*'
                            placeholder={DEFAULT_TIME}
                            type='time'
                            value={time}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <Button variant={buttonVariant} type='submit'>
                        {buttonLabel}
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export default Countdown;
