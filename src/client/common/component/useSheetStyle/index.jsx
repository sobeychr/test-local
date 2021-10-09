import { useEffect } from 'react';
import { loadCss, removeCss } from '@util/dom';
import { RUNES } from './entries';

const fileMap = {
    [RUNES]: './diablo2/runes.css',
};

const tracker = {};

const useSheetStyle = ({ id, remove = false }) => {
    useEffect(() => {
        loadCss({ fileLink: fileMap[id], id });

        if(!tracker[id]) {
            tracker[id] = 1;
        }
        else {
            tracker[id]++;
        }
        return () => {
            if(remove && tracker[id]) {
                tracker[id]--;
                if(tracker[id] <= 0) {
                    delete tracker[id];
                    removeCss(id);
                }
            }
        }
    }, []);
};

export default useSheetStyle;
