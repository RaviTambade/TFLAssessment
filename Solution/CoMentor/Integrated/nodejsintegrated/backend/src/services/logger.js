const sessionLogResponseDto = require("../dtos/responses/sessionLogResponsedto");

class Logger {
  constructor(Logger) {
    this.Logger= Logger;
  }

  LoginEntry(userid, callback) {
    this.Logger.LoginEntry(userid, callback);
  }

  LogoutEntry(userid, callback) {
    this.Logger.LogoutEntry(userid, callback);
  }

  getLoginStats(callback) {
    this.Logger.getLoginsLast24Hrs((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getAverageSessionTime(callback) {
    this.Logger.getAvgSessionTime((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getActiveSessions(callback) {
    this.Logger.getActiveSessionsCount((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getActiveUsers(callback) {
    this.Logger.getActiveUsers((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getSessionLogs(callback) {
    this.Logger.getActiveUsers((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

}

module.exports= Logger;