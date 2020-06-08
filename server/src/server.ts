import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Wanderson',
        'Diego',
        'Daniel'
    ]);

    console.log('listagem de usuários');
});

app.listen(3333);