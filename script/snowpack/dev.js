const path = require('path');
const proxy = require('http2-proxy');

const pathRoot = path.resolve(__dirname, './../../').concat('/');

const pathPublic = pathRoot.concat('public/');
const pathSrc = pathRoot.concat('src/');
const pathClient = pathSrc.concat('client/');
const pathCommon = pathClient.concat('common/');

module.exports = {
    mode: 'development',
    root: pathSrc,
    workspaceRoot: pathRoot,

    alias: {
        lodash: 'lodash-es',

        '@api': pathCommon.concat('api/'),
        '@component': pathCommon.concat('component/'),
        '@icon': pathCommon.concat('icon/'),
        '@util': pathCommon.concat('util/'),

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

    plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-sass', 'snowpack-plugin-svgr'],

    routes: [
        {
            src: '/api/.*',
            dest: (req, res) => {
                req.url = req.url.replace(/^\/api\//, '/');
                return proxy.web(req, res, {
                    hostname: 'lreact.vm',
                    port: 3030,
                });
            },
        },
        {
            match: 'routes',
            src: '.*',
            dest: '/index.html',
        },
    ],
};
