const express = require('express');

module.exports = (controller) => {
    const express = require('express');
    const router = express.Router();

        router.get('/analytics/login-activity/last-24-hours', (req, res) =>
            controller.getLoginsLast24Hrs(req, res)
        );
        
        router.get('/analytics/sessions/average-duration', (req, res) =>
            controller.getAvgSessionTime(req, res)
        );
        
        router.get('/analytics/sessions/active/count', (req, res) =>
            controller.getActiveSessionsCount(req, res)
        );
        
        router.get('/analytics/users/active', (req, res) =>
            controller.getActiveUsers(req, res)
        );

    return router;
};