const express = require('express');

module.exports = (controller) => {
    const router = express.Router();

    router.get('/getAllUsers', controller.getAllUsers.bind(controller));
    router.get('/getUserById/:id', controller.getUserById.bind(controller));
    router.post('/createUser', controller.createUser.bind(controller));
    router.put('/updateUser/:id', controller.updateUser.bind(controller));
    router.delete('/deleteUser/:id', controller.deleteUser.bind(controller));

    return router;
}