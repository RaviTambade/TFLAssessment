class SessionService {
    constructor(repo) {
        this.repo = repo;
    }

    getLoginsLast24Hrs(callback) {
        this.repo.getLoginsLast24Hrs()
            .then(result => callback(null, result))
            .catch(err => callback(err, null));
    }

    getAvgSessionTime(callback) {
        this.repo.getAvgSessionTime()
            .then(result => callback(null, result))
            .catch(err => callback(err, null));
    }

    getActiveSessionsCount(callback) {
        this.repo.getActiveSessionsCount()
            .then(result => callback(null, result))
            .catch(err => callback(err, null));
    }

    getActiveUsers(callback) {
        this.repo.getActiveUsers()
            .then(result => callback(null, result))
            .catch(err => callback(err, null));
    }
}

module.exports = SessionService;