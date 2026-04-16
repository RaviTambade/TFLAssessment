const express = require('express');

module.exports = (controller) => {
    const router = express.Router();        
    router.post('/register', (req, res) => {
        controller.InsertUser(req, res);
    });
    return router;
};
