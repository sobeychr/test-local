const path = require('path');
const pathData = path.resolve(__dirname, './../data') + '/';

module.exports = (app) => {
    app.get('/', (req, res) => res.status(200).send('ok'));

    app.get('/healthcheck', (req, res) => res.status(200).send('ok'));

    app.get('/json', (req, res) => res.status(200).sendFile(`${pathData}test.json`));
};
