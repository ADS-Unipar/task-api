const express = require('express');
const db = require('./infrastructure/db');
const bodyParser = require('body-parser')
const taskRoute = require('./routes/taskRoutes');
const cors = require('cors');
const app = express();


const port = 8000;
app.use(cors({origin:"*"}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
// Rota padrão

db.sync()

app.use('/tasks', taskRoute)

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});