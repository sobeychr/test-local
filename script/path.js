import { resolve } from 'path';

export const pathRoot = resolve(__dirname, '../').concat('/');
export const pathPublic = pathRoot.concat('public/');
export const pathScript = pathRoot.concat('script/');
export const pathSrc = pathRoot.concat('src/');
