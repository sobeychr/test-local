import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/modal';
import ModalBody from 'react-bootstrap/modalbody';
import ModalHeader from 'react-bootstrap/modalheader';
import ModalTitle from 'react-bootstrap/modaltitle';

const ButtonAdd = ({ onClick }) => (
    <Button onClick={onClick} variant='success'>
        Add Entry
    </Button>
);

const ButtonSplit = ({ onClick }) => (
    <Button onClick={onClick} variant='primary'>
        Count Split
    </Button>
);

const ModalSplit = ({ onClose, show }) => (
    <Modal show={show} onHide={onClose}>
        <ModalHeader closeButton>
            <ModalTitle>Calculate Split</ModalTitle>
        </ModalHeader>
        <ModalBody>Lorem ipsum</ModalBody>
    </Modal>
);

export { ButtonAdd, ButtonSplit, ModalSplit };
