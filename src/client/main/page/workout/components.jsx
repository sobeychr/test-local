import React from 'react';
import Button from 'react-bootstrap/Button';

import ModalLoading from '@component/modalLoading';
import ModalAddEntry from './addEntry';
import ModalSplit from './split';

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

export { ButtonAdd, ButtonSplit, ModalAddEntry, ModalLoading, ModalSplit };
