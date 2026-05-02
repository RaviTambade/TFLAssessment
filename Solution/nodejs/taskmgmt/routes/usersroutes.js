const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.get('/getAllUsers', controller.getAllUsers.bind(controller)); //done //http://localhost:5000/api/tasks/createTask
    router.get('/getUserById/:id', controller.getUserById.bind(controller)); //done //http://localhost:5000/api/tasks/getTaskById/1
    router.post('/createUser', controller.createUser.bind(controller)); //done //http://localhost:5000/api/tasks/getTaskByCreator/1
    router.put('/updateUser/:id', controller.updateUser.bind(controller)); //done //http://localhost:5000/api/tasks/getTasksByDate/2026-04-29/2026-04-30
    router.delete('/deleteUser/:id', controller.deleteUser.bind(controller)); //done //http://localhost:5000/api/tasks/getParentTask/3

    return router;
}