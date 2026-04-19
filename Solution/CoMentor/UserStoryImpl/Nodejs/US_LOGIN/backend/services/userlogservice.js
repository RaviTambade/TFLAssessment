class UserLogService {
  constructor(userLogRepository) {
    this.userLogRepository = userLogRepository;
  }

  logUserLogin(userid, callback) {
    this.userLogRepository.logUserLogin(userid, callback);
  }

  logUserLogout(userid, callback) {
    this.userLogRepository.logUserLogout(userid, callback);
  }
}

module.exports=UserLogService;