const tasks = require('../models/taskModel');

const listTasks = async (req, res) => {
    try {
        const task = await tasks.findAll();
        res.send({...task})
    } catch (error) {
        res.status(500).send(error)
    }
}

const createTask = async (req, res) => {
    console.log({body: req.body})

    try {
        const task = await tasks.create({...req.body})
        res.send({...task})
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {listTasks,createTask}