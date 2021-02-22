import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import HeaderBreadcrumb from './breadcrumb';
import './style';

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

Header.propTypes = {
    currentPage: PropTypes.string.isRequired,
};

export default Header;
