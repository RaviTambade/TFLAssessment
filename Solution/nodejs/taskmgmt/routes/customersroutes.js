const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.post('/createTask', controller.createTask.bind(controller));
    router.get('/getAllTasks', controller.getAllTasks.bind(controller));
    router.get('/getTaskById/:id', controller.getTaskById.bind(controller));
    router.get('/getTaskByCreator/:user_id', controller.getTaskByCreator.bind(controller));
    router.get('/getTasksByDate/:fromDate/:toDate', controller.getTasksByDate.bind(controller));
    router.get('/getParentTask/:id', controller.getParentTask.bind(controller));
    router.put('/updateTask/:id', controller.updateTask.bind(controller));
    router.patch('/deleteTask/:id', controller.deleteTask.bind(controller));
    router.get('/getAllocatedTasksByStudentId/:id', controller.getAllocatedTasksByStudentId.bind(controller));

    return router;
}