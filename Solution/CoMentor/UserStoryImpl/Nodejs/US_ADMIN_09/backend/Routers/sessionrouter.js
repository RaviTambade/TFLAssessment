const express = require('express');

module.exports = (controller) => {
    const express = require('express');
    const router = express.Router();

    router.get('/getLoginsLast24Hrs', (req, res) => controller.getLoginsLast24Hrs(req, res));
    router.get('/getAvgSessionTime', (req, res) => controller.getAvgSessionTime(req, res));
    router.get('/getActiveSessionsCount', (req, res) => controller.getActiveSessionsCount(req, res));
    router.get('/getActiveUsers', (req, res) => controller.getActiveUsers(req, res));

    return router;
};