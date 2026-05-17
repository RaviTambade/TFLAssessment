const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.get('/users/:id', controller.getAllocatedTasksByStudentId.bind(controller));
    router.post('/allocate', controller.allocate.bind(controller));
    router.delete('/unallocate', controller.unallocate.bind(controller));
    router.get('/tasks/:id', controller.getAllocatedTasksById.bind(controller));
    router.get('/tasks/status/:status', controller.getTasksAllocatedByStatus.bind(controller));
    router.get('/tasks/user/:userId/status/:status', controller.getTasksAllocatedToUserByStatus.bind(controller));

    return router;
}