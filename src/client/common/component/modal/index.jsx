// https://getbootstrap.com/docs/4.4/components/modal/

import React, { useRef } from 'react';

import './modal.scss';

const Modal = ({ children, onClose, show }) => {
    const modalRef = useRef();

    const onHide = ({ target }) => {
        if (modalRef && modalRef.current) {
            if (target === modalRef.current) {
                onClose();
            }
        }
    };

    return !show ? null : (
        <>
            <div className='modal-backdrop show' />
            <div
                className='modal'
                tabIndex='-1'
                onClick={onHide}
                ref={modalRef}
                style={{ display: 'block' }}
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>{children}</div>
                </div>
            </div>
        </>
    );
};

const ModalBody = ({ children }) => <div className='modal-body'>{children}</div>;

const ModalFooter = ({ children }) => <div className='modal-footer'>{children}</div>;

const ModalHeader = ({ children, onClose }) => (
    <div className='modal-header'>
        <div className='modal-title h4'>{children}</div>
        {onClose && <button className='btn-close' onClick={onClose} type='button' />}
    </div>
);

export default Modal;
export { ModalBody, ModalFooter, ModalHeader };
