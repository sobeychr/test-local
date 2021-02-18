require('colors');
const responseTime = require('response-time');

const headers = ['Accept', 'Content-Type'];
const methods = ['GET', 'OPTIONS', 'PATCH', 'POST', 'PUT'];

module.exports = (app) => {
    app.use(
        responseTime((req, res, time) => {
            const { method, url } = req;
            console.log(
                '>>'.yellow,
                'responded in'.white,
                `${time.toFixed(4)}ms`.brightCyan,
                `${res.statusCode}`.magenta,
                `${method}`.green,
                `${url}`.magenta,
            );
        }),
    );

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Headers', headers.join(', '));
        res.header('Access-Control-Allow-Methods', methods.join(', '));
        res.header('Access-Control-Allow-Origin', 'http://lreact:3000');
        next();
    });
};
