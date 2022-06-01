import { readJsonSync } from 'fs-extra';
import { getLastCommit } from 'git-last-commit';
import { pathRoot } from './path';

export const onGit = async() => new Promise((res, rej) => {
    getLastCommit((err, commit) => {
        if(err) {
            return rej(err);
        }
        return res(commit);
    });
});

export const onVersion = () => {
    const { version = '' } = readJsonSync(pathRoot.concat('package.json')) || {};
    return version;
};
