import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Difference from '@module/workout/Difference';
import './workoutEntry.scss';

const Entry = ({ current, next }) => {
    const difference = new Difference({ current, next });

    const {
        display: {
            calory: dCal,
            date: dDate,
            distance: dDist,
            split: dSplit,
            stroke: dStroke,
            time: dTime,
            watt: dWatt,
        } = {},
    } = current;

    const {
        display: {
            calory: diffCal,
            date: diffDate,
            distance: diffDist,
            split: diffSplit,
            stroke: diffStroke,
            time: diffTime,
            watt: diffWatt,
        } = {},
    } = difference;

    const onClick = () => console.log('difference', difference);

    return (
        <Card as='article' className='workout-entry' onClick={onClick}>
            <Card.Header className='header'>
                <span className='title'>Workout entry</span>
                <span className='date'>
                    {dDate}
                    {diffDate && <span className='diff'>{diffDate}</span>}
                </span>
            </Card.Header>
            <Card.Body className='body'>
                <Row>
                    <Col className='value-entry'>
                        <span className='title'>Stroke:</span>
                        <span className='value'>
                            {dStroke}
                            {diffStroke && <span className='diff'>{diffStroke}</span>}
                        </span>
                    </Col>
                    <Col className='value-entry'>
                        <span className='title'>Watts:</span>
                        <span className='value'>
                            {dWatt}
                            {diffWatt && <span className='diff'>{diffWatt}</span>}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className='value-entry'>
                        <span className='title'>Distance:</span>
                        <span className='value'>
                            {dDist}
                            {diffDist && <span className='diff'>{diffDist}</span>}
                        </span>
                    </Col>
                    <Col className='value-entry'>
                        <span className='title'>Time:</span>
                        <span className='value'>
                            {dTime}
                            {diffTime && <span className='diff'>{diffTime}</span>}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className='value-entry'>
                        <span className='title'>Calories:</span>
                        <span className='value'>
                            {dCal}
                            {diffCal && <span className='diff'>{diffCal}</span>}
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className='value-entry'>
                        <span className='title'>Split:</span>
                        <span className='value'>
                            {dSplit}
                            {diffSplit && <span className='diff'>{diffSplit}</span>}
                        </span>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Entry;
