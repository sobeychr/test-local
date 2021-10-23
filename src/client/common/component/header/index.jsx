import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';
import './header.scss';

const Header = ({ page }) => (
    <Breadcrumb className='main-header'>
        <BreadcrumbItem linkAs={Link} linkProps={{ to: '/' }}>
            Home
        </BreadcrumbItem>
        <BreadcrumbItem active>{page}</BreadcrumbItem>
    </Breadcrumb>
);

Header.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Header;
