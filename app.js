import express from 'express';
import formatStringRoutes from './routes/formatStringRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', formatStringRoutes);

app.get('/', (req, res) => {
    res.send('home route hit');
});

app.listen(port, () => {
    console.log('server is running');
});
