import React from 'react';
import Button from '@component/button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@component/modal';

// import Modal from 'react-bootstrap';
// import { Button, Modal } from 'reactstrap';
// import { Button, Modal } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';

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

// const Modal = () => <div/>;

// const ModalSplit = () => <Modal animation={false}>ttt</Modal>
const ModalSplit = ({ onClose, show }) => (
    <Modal onClose={onClose} show={show}>
        <ModalHeader onClose={onClose}>Calculate Split</ModalHeader>
        <ModalBody>Lorem ipsum</ModalBody>
        <ModalFooter>
            <Button onClick={onClose} variant='secondary'>
                Close
            </Button>
        </ModalFooter>
    </Modal>
);

export { ButtonAdd, ButtonSplit, ModalSplit };
