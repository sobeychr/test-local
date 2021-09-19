import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Entry = ({ display: { calory, date, distance, stroke, time, watt } = {} }) => (
    <Card as='article' className='workout-entry'>
        <Card.Header className='header'>
            <span className='title'>Workout entry</span>
            <span className='date'>{date}</span>
        </Card.Header>
        <Card.Body className='body'>
            <Row>
                <Col className='value-entry'>
                    <span className='title'>Stroke:</span>
                    <span className='value'>{stroke}</span>
                </Col>
                <Col className='value-entry'>
                    <span className='title'>Watts:</span>
                    <span className='value'>{watt}</span>
                </Col>
            </Row>
            <Row>
                <Col className='value-entry'>
                    <span className='title'>Distance:</span>
                    <span className='value'>{distance}</span>
                </Col>
                <Col className='value-entry'>
                    <span className='title'>Time:</span>
                    <span className='value'>{time}</span>
                </Col>
            </Row>
            <Row>
                <Col className='value-entry half'>
                    <span className='title'>Calories:</span>
                    <span className='value'>{calory}</span>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

export default Entry;
