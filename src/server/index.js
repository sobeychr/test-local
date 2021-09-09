const express = require('express');
const app = express();
const port = 3030;

app.use(express.json());

app.get('/', (req, res) => res.status(200).send('home'));
app.get('/healthcheck', (req, res) => res.status(200).send('ok'));

app.listen(port, () => {
    console.log(`Listening to http://lreact:${port}`);
});
