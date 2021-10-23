import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/modalbody';
import ModalFooter from 'react-bootstrap/modalfooter';
import ModalHeader from 'react-bootstrap/modalheader';
import ModalTitle from 'react-bootstrap/modaltitle';

const ModalForm = ({
    body,
    className,
    footer,
    hasCloseButton = true,
    onClose,
    onSubmit: onSubmitProp,
    show,
    title = 'Modal Template',
}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        if (onSubmitProp) {
            onSubmitProp(e);
        }
    };

    return (
        <Modal className={className} show={show} onHide={onClose}>
            <ModalHeader closeButton={hasCloseButton}>
                <ModalTitle>{title}</ModalTitle>
            </ModalHeader>
            <Form onSubmit={onSubmit}>
                <ModalBody>{body}</ModalBody>
                <ModalFooter>{footer}</ModalFooter>
            </Form>
        </Modal>
    );
};

ModalForm.propTypes = {
    body: PropTypes.node,
    className: PropTypes.string,
    footer: PropTypes.node,
    hasCloseButton: PropTypes.bool,
    onClose: PropTypes.func,
    onSubmit: PropTypes.func,
    show: PropTypes.bool,
    title: PropTypes.string,
};

export default ModalForm;
