const express = require('express');
const path = require('path');

const middleware = require('./middleware');
const request = require('./request');

const rootPath = path.resolve(__dirname, './../../').concat('/');
const dataPath = rootPath.concat('script/data/');

const app = express();
const port = 3030;

middleware({ app, express });
request({ app, dataPath });

app.listen(port, () => {
    console.log(`Listening to http://lreact.vm:${port}`);
});
