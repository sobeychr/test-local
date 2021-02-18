require('colors');
const express = require('express');
const app = express();
const port = 3030;

app.use(express.json());

require('./middleware/responseTime')(app);
require('./endpoint')(app);

app.listen(port, () => {
    console.log('Listening to'.brightCyan, `http://lreact:${port}`.magenta);
});
