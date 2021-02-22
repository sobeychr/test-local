import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import './style';

const Main = ({ children, className }) => (
    <Container as='main' className={className} fluid>
        {children}
    </Container>
);

Main.propTypes = {
    children: PropTypes.object,
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

export default Main;
