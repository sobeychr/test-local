const { readFileSync, writeFileSync } = require('fs');

module.exports = ({ app, dataPath }) => {
    const readFile = () => readFileSync(dataPath.concat('row.json'), 'utf8');

    app.get('/row', async (req, res) => {
        try {
            const stringData = readFile();
            const jsonData = JSON.parse(stringData);
            return res.status(200).json(jsonData);
        } catch (err) {
            return res.status(400).json({
                err: err.toString(),
                method: 'GET',
                path: '/row',
            });
        }
    });

    app.put('/row', async (req, res) => {
        try {
            const stringData = readFile();
            const jsonData = JSON.parse(stringData);

            const { body: { workout } = {} } = req;
            jsonData.push(workout);

            writeFileSync(dataPath.concat('row.json'), JSON.stringify(jsonData));

            return res.status(200).json(jsonData);
        } catch (err) {
            return res.status(400).json({
                err: err.toString(),
                method: 'PUT',
                path: '/row',
            });
        }
    });
};
