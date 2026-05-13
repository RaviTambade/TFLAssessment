const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/createTask', controller.createTask.bind(controller)); //done //http://localhost:5000/api/tasks/createTask
    router.get('/getAllTasks', controller.getAllTasks.bind(controller)); //done //http://localhost:5000/api/tasks/getAllTasks
    router.get('/getTaskById/:id', controller.getTaskById.bind(controller)); //done //http://localhost:5000/api/tasks/getTaskById/1
    router.get('/getTaskByCreator/:user_id', controller.getTaskByCreator.bind(controller)); //done //http://localhost:5000/api/tasks/getTaskByCreator/1
    router.get('/getTasksByDate/:fromDate/:toDate', controller.getTasksByDate.bind(controller)); //done //http://localhost:5000/api/tasks/getTasksByDate/2026-04-29/2026-04-30
    router.get('/getParentTask/:id', controller.getParentTask.bind(controller)); //done //http://localhost:5000/api/tasks/getParentTask/3
    router.put('/updateTask/:id', controller.updateTask.bind(controller)); //done //http://localhost:5000/api/tasks/updateTask/7
    router.patch('/deleteTask/:id', controller.deleteTask.bind(controller)); //done //http://localhost:5000/api/tasks/deleteTask/7
    router.get('/getAllocatedTasksByStudentId/:id', controller.getAllocatedTasksByStudentId.bind(controller)); //done //http://localhost:5000/api/tasks/getAllocatedTasksByStudentId/101

    return router;
}