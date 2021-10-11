module.exports = ({ app, express }) => {
    app.use(express.json());

    app.get('/', (req, res) => res.status(200).end('home'));
    app.get('/healthcheck', (req, res) => res.status(200).end('ok'));
};
