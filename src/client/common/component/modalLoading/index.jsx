import React from 'react';
import Modal from 'react-bootstrap/Modal';

import './modalLoading.scss';

const ModalLoading = ({ show }) => <Modal className='modal-loading' show={show} />;

export default ModalLoading;
