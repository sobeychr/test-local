const { readFileSync, writeFileSync } = require('fs');
const express = require('express');
const path = require('path');

const rootPath = path.resolve(__dirname, './../../').concat('/');
const dataPath = rootPath.concat('script/data/');
const srcPath = rootPath.concat('src/');

const app = express();
const port = 3030;

app.use(express.json());

app.get('/', (req, res) => res.status(200).end('home'));
app.get('/healthcheck', (req, res) => res.status(200).end('ok'));

app.get('/row', async (req, res) => {
    try {
        const stringData = readFileSync(dataPath.concat('row.json'), 'utf8');
        const jsonData = JSON.parse(stringData);

        return res.status(200).json(jsonData);
    }
    catch(err) {
        return res.status(400).json({
            err: err.toString(),
            method: 'GET',
            path: '/row',
        });
    }
});

app.put('/row', async (req, res) => {
    try {
        const stringData = readFileSync(dataPath.concat('row.json'), 'utf8');
        const jsonData = JSON.parse(stringData);

        const { body: { workout } = {} } = req;
        jsonData.push(workout);

        writeFileSync(dataPath.concat('row.json'), JSON.stringify(jsonData));

        return res.status(200).json(jsonData);
    }
    catch(err) {
        return res.status(400).json({
            err: err.toString(),
            method: 'PUT',
            path: '/row',
        });
    }
});

app.listen(port, () => {
    console.log(`Listening to http://lreact.vm:${port}`);
});
