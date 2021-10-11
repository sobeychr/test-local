import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

import './modalLoading.scss';

const ModalLoading = ({ show = false }) => <Modal className='modal-loading' show={show} />;

ModalLoading.propTypes = {
    show: PropTypes.bool,
};

export default ModalLoading;
