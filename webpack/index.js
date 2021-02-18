const path = require('path');

const pathRoot = path.resolve(__dirname, './../').concat('/');
const pathClient = pathRoot.concat('client/');
const pathDist = pathRoot.concat('dist/');

const alias = ['component', 'core', 'page', 'store'].reduce(
    (acc, name) => ({
        ...acc,
        [`@${name}`]: pathClient.concat(`${name}/`),
    }),
    {},
);

module.exports = {
    entry: {
        client: `${pathClient}index.jsx`,
    },
    output: {
        filename: '[name].js',
        path: pathDist,
    },
    devServer: {
        bonjour: true,
        compress: true,
        contentBase: pathDist,
        host: 'lreact.vm',
        hot: true,
        inline: true,
        port: 3000,
    },
    devtool: 'source-map',

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|gif|png|mp3|svg|txt)$/,
                use: ['file-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json'],
        modules: [pathClient, 'node_modules'],
        alias,
    },
};
