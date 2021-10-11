const { readFileSync, writeFileSync } = require('fs');
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

/*
app.get('/rune', async (req, res) => {
    try {
        const stringData = readFileSync(dataPath.concat('diablo2/rune.json'), 'utf8');
        const jsonData = JSON.parse(stringData);

        return res.status(200).json(jsonData);
    } catch (err) {
        return res.status(400).json({
            err: err.toString(),
            method: 'GET',
            path: '/rune',
        });
    }
});
*/

app.listen(port, () => {
    console.log(`Listening to http://lreact.vm:${port}`);
});
