import { defineConfig, loadEnv } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { onGit, onVersion } from '../getVersion';
import { pathPublic, pathRoot, pathSrc } from '../path';

const configs = defineConfig(async({ mode }) => {
    const isDev = mode === 'development';

    const { committedOn = '', shortHash = '', tags = [] } = await onGit();
    const version = onVersion();

    const modeLoad = mode === 'development'
        ? 'dev'
        : 'prod';
    const env = loadEnv(modeLoad, process.cwd(), '');
    const { SERVER_HOST, SERVER_PORT } = env;

    const timestamp = parseInt(committedOn, 10);

    return {
        base: '/',
        build: {
            target: 'esnext',
            polyfillDynamicImport: false,
        },
        clearScreen: false,
        define: {
            GLOBALS: {
                isDev,
                git: {
                    hash: shortHash,
                    tags,
                    timestamp,
                },
                version,
            },
        },
        mode,
        minify: 'esbuild',
        plugins: [solidPlugin()],
        publicDir: pathPublic,
        resolve: {
            alias: {
                lodash: 'lodash-es',
                '@component': pathSrc.concat('component/'),
                '@core': pathSrc.concat('core/'),
                '@page': pathSrc.concat('page/'),
                '@util': pathSrc.concat('util/'),
            },
        },
        root: pathRoot,
        server: {
            host:SERVER_HOST,
            port: SERVER_PORT,
        },
        sourcemap: true,
    };
});

export default configs;
