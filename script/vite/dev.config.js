import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';
import { defineConfig } from 'vite';

const pathRoot = resolve(__dirname, '../../').concat('/');
const pathClient = pathRoot.concat('src/client/');
const pathCommon = pathClient.concat('common/');
const pathMain = pathClient.concat('main/');

export default defineConfig({
    mode: 'development',
    root: pathRoot,

    base: '/',

    plugins: [reactRefresh()],

    publicDir: pathRoot.concat('public/'),

    resolve: {
        alias: {
            '@bootstrap': pathRoot.concat('node_modules/bootstrap/scss/bootstrap'),
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
            '/api': {
                target: 'http://lreact.vm:3030',
                changeOrigin: true,
                rewrite: (path) => path.replace('/api', ''),
            },
        },
    },
});
