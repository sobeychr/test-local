import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './style';

const Main = ({ children }) => (
    <Container as='main' className='main' fluid>
        {children}
    </Container>
);

export default Main;
