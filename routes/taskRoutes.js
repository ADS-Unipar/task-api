const {Router} = require('express')
const { listTasks, createTask } = require('../controllers/taskController')
const taskRoute =  Router()

taskRoute.get('/', listTasks)
taskRoute.post('/', createTask)

module.exports = taskRoute;