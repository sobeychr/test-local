import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import path from 'path';

const pathRoot = path.resolve(__dirname, './../../').concat('/');

const pathPublic = pathRoot.concat('public/');
const pathSrc = pathRoot.concat('src/');
const pathClient = pathSrc.concat('client/');
const pathCommon = pathClient.concat('common/');
const pathMain = pathClient.concat('main/');

export default defineConfig({
    mode: 'development',
    root: pathSrc,

    build: {
        outDir: 'public/main',
        assetsDir: 'public/asset',
    },

    plugins: [reactRefresh()],

    public: pathPublic.concat('main/'),

    resolve: {
        alias: {
            lodash: 'lodash-es',

            '@api': pathCommon.concat('api/'),
            '@component': pathCommon.concat('component/'),
            '@icon': pathCommon.concat('icon/'),
            '@util': pathCommon.concat('util/'),

            '@core': pathMain.concat('core/'),
            '@module': pathMain.concat('module/'),
            '@page': pathMain.concat('page/'),
        },
    },

    server: {
        host: 'lreact.vm',
        port: 3000,
        strictPort: true,

        proxy: {
            '/api': 'http://lreact.vm:3030',
        },
    },
});
