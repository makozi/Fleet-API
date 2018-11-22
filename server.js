//server.js

import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send({ 'message': 'Yay! Fleet API works ' });
});


import Fleet from './src/controllers/Fleet';

app.post('/api/v1/fleets', Fleet.create);
app.get('/api/v1/fleets', Fleet.getAll);
app.get('/api/v1/fleets/:id', Fleet.getOne);
app.put('/api/v1/fleets/:id', Fleet.update);
app.delete('/api/v1/fleets/:id', Fleet.delete);

app.listen(6000);
console.log('app running on port', 6000);