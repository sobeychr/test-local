import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import HeaderBreadcrumb from './breadcrumb';
import './style';

const home = 'home';

const Header = ({ currentPage }) => (
    <Container as='header' className='header' fluid>
        <Row>
            <Col as='h1'>{currentPage}</Col>
        </Row>
        <Row>
            <Col as={HeaderBreadcrumb} currentPage={currentPage} />
        </Row>
    </Container>
);

export default Header;
