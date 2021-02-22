import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './style';

const Main = ({ children, className }) => (
    <Container as='main' className={className} fluid>
        {children}
    </Container>
);

export default Main;
