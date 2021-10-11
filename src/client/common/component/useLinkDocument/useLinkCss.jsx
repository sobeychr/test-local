import { useEffect } from 'react';
import { loadCss, removeFileLink } from '@util/dom';
import { RUNES } from './entries';

const fileMap = {
    [RUNES]: './diablo2/runes.css',
};

const tracker = {};

const useLinkCss = ({ id, remove = false }) => {
    if (!fileMap.hasOwnProperty(id)) {
        throw new Error(`Unable to useLinkCss with "${id}"`);
    }

    useEffect(() => {
        loadCss({ fileLink: fileMap[id], id });

        if (remove) {
            if (!tracker[id]) {
                tracker[id] = 1;
            } else {
                tracker[id]++;
            }
        }
        return () => {
            if (remove && tracker[id]) {
                tracker[id]--;
                if (tracker[id] <= 0) {
                    delete tracker[id];
                    removeFileLink(id);
                }
            }
        };
    }, []);
};

export default useLinkCss;
