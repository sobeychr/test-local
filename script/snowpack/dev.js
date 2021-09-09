const path = require('path');

const pathRoot = path.resolve(__dirname, './../../').concat('/');
const pathPublic = pathRoot.concat('public/');
const pathSrc = pathRoot.concat('src/');

module.exports = {
    mode: 'development',
    root: pathSrc,
    workspaceRoot: pathRoot,

    devOptions: {
        hostname: 'lreact.vm',
        port: 3000,
        open: 'none',
    },

    mount: {
        [pathPublic.concat('main/')]: '/',
        [pathPublic.concat('asset/')]: { url: '/asset', static: true },
        [pathPublic.concat('nav/')]: '/nav',
        [pathSrc.concat('client/main/')]: '/',
        [pathSrc.concat('client/nav/')]: '/nav',
    },

    packageOptions: {
        // external: ['fs', 'lodash-es'],
    },

    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-sass',
    ],
};
