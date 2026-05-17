class UserActivityService {
  constructor(userActivityRepository) {
    this.repository = userActivityRepository;
  }

  login(userid, roleid, callback) {
    this.repository.login(userid, roleid, callback);
  }

  logout(userid,roleid, callback) {
    this.repository.logout(userid, roleid,callback);
  }

  getRecentLoginCount(callback) {
    this.repository.getRecentLoginCount((err, result) => {
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

  getActiveSessionsCount(callback) {
    this.repository.getActiveSessionsCount((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getLiveUsers(callback) {
    this.repository.getLiveUsers((err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  }

  getAllUserActivity(name, callback) {
    this.repository.getAllUserActivity(name,callback);
  }
}

module.exports= UserActivityService;