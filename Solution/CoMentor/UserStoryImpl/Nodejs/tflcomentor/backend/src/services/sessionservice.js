const sessionLogResponseDto = require("../dtos/responses/sessionLogResponsedto");

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
  //Samruddhi
  async getSessionLogs(name) {
    const rows = await this.repo.getSessionLogs(name);
    return rows.map(sessionLogResponseDto);
  }
}

module.exports = SessionService;
