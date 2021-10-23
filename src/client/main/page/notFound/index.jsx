import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className='page page-notfound'>
        <h1>Not Found</h1>
        <Link to='/'>return home</Link>
    </div>
);

export default NotFoundPage;
