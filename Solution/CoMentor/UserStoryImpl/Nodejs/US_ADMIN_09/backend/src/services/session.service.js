class SessionService {
  constructor(repo) {
    this.repo = repo;
  }

  async getLoginStats() {
    return await this.repo.getLoginsLast24Hrs();
  }

  async getAverageSessionTime() {
    return await this.repo.getAvgSessionTime();
  }

  async getActiveSessions() {
    return await this.repo.getActiveSessionsCount();
  }

  async getActiveUsers() {
    return await this.repo.getActiveUsers();
  }
}

module.exports = SessionService;