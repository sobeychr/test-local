import React, { useEffect } from 'react';
import useLinkCss from '@component/useLinkDocument/useLinkCss';
import { RUNES } from '@component/useLinkDocument/entries';
import useRune from '@module/rune/store';
import './runeIcon.scss';

const RuneIcon = ({ name }) => {
    const { validateRune } = useRune();
    useLinkCss({ id: RUNES, remove: true });

    /*
    useEffect(() => {
        if(!validateRune(name)) {
            throw new Error(`Unable to find rune "${name}"`);
        }
    }, []);
    */

    return <div className={`runeIcon icon-rune${name}`} />;
};

export default RuneIcon;
