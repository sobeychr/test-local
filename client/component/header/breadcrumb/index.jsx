import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';
import { Link } from 'react-router-dom';

import './style';

const HeaderBreadcrumb = ({ currentPage }) => {
    return currentPage === 'Home'
        ? null
        : (
            <Breadcrumb>
                <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                </li>
                <BreadcrumbItem active>{currentPage}</BreadcrumbItem>
            </Breadcrumb>
        );
};

HeaderBreadcrumb.propTypes = {
    currentPage: PropTypes.string.isRequired,
};

export default HeaderBreadcrumb;
