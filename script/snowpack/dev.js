const path = require('path');

const pathRoot = path.resolve(__dirname, './../../').concat('/');

const pathPublic = pathRoot.concat('public/');
const pathSrc = pathRoot.concat('src/');
const pathClient = pathSrc.concat('client/');

module.exports = {
    mode: 'development',
    root: pathSrc,
    workspaceRoot: pathRoot,

    alias: {
        lodash: 'lodash-es',

        '@common': pathClient.concat('common/'),
        '@component': pathClient.concat('common/component/'),
        '@icon': pathClient.concat('common/icon/'),
        '@util': pathClient.concat('common/util/'),

        '@core': pathClient.concat('main/core/'),
        '@page': pathClient.concat('main/page/'),
    },

    devOptions: {
        hostname: 'lreact.vm',
        port: 3000,
        open: 'none',
    },

    mount: {
        [pathPublic.concat('main/')]: '/',
        [pathPublic.concat('asset/')]: { url: '/asset', static: true },
        [pathPublic.concat('nav/')]: '/nav',

        [pathClient.concat('main/')]: '/',
        [pathClient.concat('nav/')]: '/nav',
    },

    packageOptions: {
        external: ['fs', 'lodash-es'],
    },

    plugins: [
        '@snowpack/plugin-react-refresh',
        '@snowpack/plugin-sass',
        'snowpack-plugin-svgr',
    ],

    routes: [
        {
            match: 'routes',
            src: '.*',
            dest: '/index.html',
        },
    ],
};
