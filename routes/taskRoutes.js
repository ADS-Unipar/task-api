const {Router} = require('express')
const { listTasks, createTask, getTaskById, deleteTaskById, editTaskById } = require('../controllers/taskController')
const taskRoute =  Router()

taskRoute.get('/:id', getTaskById)
taskRoute.put('/:id', editTaskById)
taskRoute.delete('/:id', deleteTaskById)
taskRoute.get('/', listTasks)
taskRoute.post('/', createTask)

module.exports = taskRoute;