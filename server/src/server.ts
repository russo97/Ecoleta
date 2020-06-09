import express from 'express';

const app = express();

app.use(express.json());

const users = [
    'Wanderson',
    'Diego',
    'Daniel'
];

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    return response.json(users[id]);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const { name, email } = data;

    return response.json({ name, email });
});

app.listen(3333);