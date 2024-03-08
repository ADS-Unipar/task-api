const express = require('express');
const db = require('./db');
const tasks = require('./models/tasks');
const app = express();
const port = 3000;
app.use(express.json());
// Rota padrão

db.sync()
app.get('/tasks', async (req, res) => {
    try {
        const task = await tasks.findAll();
        res.send({...task})
    } catch (error) {
        res.status(500).send(error)
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const task = await tasks.create({...req.body})
        res.send({...task})
    } catch (error) {
        res.status(500).send(error)
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});