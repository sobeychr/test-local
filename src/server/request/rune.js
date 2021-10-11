const { readFileSync } = require('fs');

module.exports = ({ app, dataPath }) => {
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

    app.get('/runeword', async (req, res) => {
        try {
            const stringData = readFileSync(dataPath.concat('diablo2/runeword.json'), 'utf8');
            const jsonData = JSON.parse(stringData);
            return res.status(200).json(jsonData);
        } catch (err) {
            return res.status(400).json({
                err: err.toString(),
                method: 'GET',
                path: '/runeword',
            });
        }
    });
};
