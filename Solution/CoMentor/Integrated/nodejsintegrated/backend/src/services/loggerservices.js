const sessionLogResponseDto = require("../dtos/responses/sessionLogResponsedto");

class LoggerService {
  constructor(LoggerRepository) {
    this.LoggerRepository = LoggerRepository;
  }

  LoginEntry(userid, callback) {
    this.LoggerRepository.LoginEntry(userid, callback);
  }

  LogoutEntry(userid, callback) {
    this.LoggerRepository.LogoutEntry(userid, callback);
  }

  getLoginStats(callback) {
    this.LoggerRepository.getLoginsLast24Hrs((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getAverageSessionTime(callback) {
    this.LoggerRepository.getAvgSessionTime((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getActiveSessions(callback) {
    this.LoggerRepository.getActiveSessionsCount((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getActiveUsers(callback) {
    this.LoggerRepository.getActiveUsers((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }
}

module.exports= LoggerService;