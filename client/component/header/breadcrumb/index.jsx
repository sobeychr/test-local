import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import BreadcrumbItem from 'react-bootstrap/BreadcrumbItem';
import { Link } from 'react-router-dom';

import './style';

const HeaderBreadcrumb = ({ currentPage }) => {
    return currentPage === 'home' ? null : (
        <Breadcrumb>
            <li className='breadcrumb-item'>
                <Link to='/'>Home</Link>
            </li>
            <BreadcrumbItem active>{currentPage}</BreadcrumbItem>
        </Breadcrumb>
    );
};

export default HeaderBreadcrumb;
