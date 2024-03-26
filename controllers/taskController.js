const tasks = require('../models/taskModel');

const listTasks = async (req, res) => {
    try {
        const task = await tasks.findAll();
        res.send([...task])
    } catch (error) {
        res.status(500).send(error)
    }
}

const getTaskById = async (req, res) => {
    
    try {
        if(!req?.params?.id){
            throw Error("Tarefa não existe!")
        }
        const task = await tasks.findOne({where: {id: req?.params?.id}})
        res.send({...task})
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTaskById = async (req, res) => {
    
    try {
        if(!req?.params?.id){
            throw Error("Tarefa não existe!")
        }
        const task = await tasks.destroy({where: {id: req?.params?.id}})
        res.send({...task})
    } catch (error) {
        res.status(500).send(error)
    }
}

const createTask = async (req, res) => {

    try {
        const existsTask = await tasks.findOne({where: {title: req?.body?.title, status: 'ACTIVE' }})
        if(existsTask?.dataValues?.id){
            res.status(403).send({error: "Essa tarefa já exite e está ativa"})
            return;
        }
        const task = await tasks.create({...req.body})
        res.send({...task})
    } catch (error) {
        res.status(500).send(error)
    }
}

const editTaskById = async (req, res) => {
    try {
        console.log(req?.params?.id)
        if(!req?.params?.id){
            throw Error("Tarefa não existe!")
        }
        const task = await tasks.update({...req.body},{where: {id: req.params.id}})
        res.send({...task})
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {listTasks,createTask, getTaskById,deleteTaskById, editTaskById}