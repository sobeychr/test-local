import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { timestampToString } from '@util/date';
import diffEntries from './differences';

const Entry = ({ current, next }) => {
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
        calory: diffCal,
        date: diffDate,
        distance: diffDist,
        split: diffSplit,
        stroke: diffStroke,
        time: diffTime,
        watt: diffWatt,
    } = {};

    const ttt = diffEntries(current, next);

    return (
        <Card as='article' className='workout-entry'>
            <Card.Header className='header'>
                <span className='title'>Workout entry</span>
                <span className='date'>
                    {dDate}
                    <span className='diff'>{diffDate && timestampToString(diffDate)}</span>
                </span>
            </Card.Header>
            <Card.Body className='body'>
                <Row>
                    <Col className='value-entry'>
                        <span className='title'>Stroke:</span>
                        <span className='value'>
                            {dStroke}
                            <span className='diff'>{diffStroke}</span>
                        </span>
                    </Col>
                    <Col className='value-entry'>
                        <span className='title'>Watts:</span>
                        <span className='value'>
                            {dWatt}
                            <span className='diff'>{diffWatt}</span>
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className='value-entry'>
                        <span className='title'>Distance:</span>
                        <span className='value'>
                            {dDist}
                            <span className='diff'>{diffDist}</span>
                        </span>
                    </Col>
                    <Col className='value-entry'>
                        <span className='title'>Time:</span>
                        <span className='value'>
                            {dTime}
                            <span className='diff'>{diffTime}</span>
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className='value-entry'>
                        <span className='title'>Calories:</span>
                        <span className='value'>
                            {dCal}
                            <span className='diff'>{diffCal}</span>
                        </span>
                    </Col>
                </Row>
                <Row>
                    <Col className='value-entry'>
                        <span className='title'>Split:</span>
                        <span className='value'>
                            {dSplit}
                            <span className='diff'>{diffSplit}</span>
                        </span>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default Entry;
