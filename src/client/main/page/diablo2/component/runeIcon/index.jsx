import React from 'react';
import PropTypes from 'prop-types';
import { RUNES } from '@component/useLinkDocument/entries';
import useLinkCss from '@component/useLinkDocument/useLinkCss';
import './runeIcon.scss';

const RuneIcon = ({ name }) => {
    useLinkCss({ id: RUNES, remove: true });
    return <div className={`runeIcon icon-rune${name}`} />;
};

RuneIcon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default RuneIcon;
