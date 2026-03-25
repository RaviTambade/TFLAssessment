const express = require('express');

module.exports = (controller) => {
    const router = express.Router();
    router.get('/getAllUsers', controller.getAllUsers.bind(controller));
    return router;
};
