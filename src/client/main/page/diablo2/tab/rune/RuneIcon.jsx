import React, { useEffect } from 'react';
import useSheetStyle from '@component/useSheetStyle';
import { RUNES } from '@component/useSheetStyle/entries';

const RuneIcon = ({ name }) => {
    useSheetStyle({ id: RUNES, remove: true });
    return <span className={`icon icon-rune${name}`}/>;
}

export default RuneIcon;
