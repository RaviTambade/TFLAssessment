class SessionController {
    constructor(service) {
        this.service = service;
    }

    getLoginsLast24Hrs(req, res) {
        this.service.getLoginsLast24Hrs((err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result[0] || { totalLogins24h: 0 });
        });
    }

    getAvgSessionTime(req, res) {
        this.service.getAvgSessionTime((err, result) => {
            if (err) return res.status(500).json(err);
            const avgSeconds = result[0][0]?.avgSessionTime || 0;
            
            const hours = Math.floor(avgSeconds / 3600);
            const minutes = Math.floor((avgSeconds % 3600) / 60);
            const seconds = avgSeconds % 60;
        
            res.json({
                avgSessionTime: `${hours}h ${minutes}m ${seconds}s`
            });
        });
    }
    getActiveSessionsCount(req, res) {
        this.service.getActiveSessionsCount((err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result[0] || { activeSessions: 0 });
        });
    }

    getActiveUsers(req, res) {
        this.service.getActiveUsers((err, result) => {
            if (err) return res.status(500).json(err);
            res.json(result);
        });
    }
}

module.exports = SessionController;