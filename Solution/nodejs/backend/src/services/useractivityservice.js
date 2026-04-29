class UserActivityService {
  constructor(userActivityRepository) {
    this.repository = userActivityRepository;
  }

  login(userid, callback) {
    this.repository.login(userid, callback);
  }

  logout(userid, callback) {
    this.repository.logout(userid, callback);
  }

  getTotalLogins24Hours(callback) {
    this.repository.getTotalLogins24Hours((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getRecentAverageSessionTime(callback) {
    this.repository.getRecentAverageSessionTime((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getTotalActiveSessions(callback) {
    this.repository.getTotalActiveSessions((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getCurrentActiveUsers(callback) {
    this.repository.getCurrentActiveUsers((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getAllUserActivity(name,callback) {
    this.repository.getAllUserActivity(name,callback);
  }
}

module.exports= UserActivityService;