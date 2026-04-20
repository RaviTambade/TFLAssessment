class userLogRepository {
  constructor(connection) {
    this.connection = connection;
  }

  logUserLogin(userid, callback) {
    const sql = "insert into user_logs (user_id,login_time) values(?,now() );";
    this.connection.query(sql, [userid], callback);
  }

  logUserLogout(userid, callback) {
    const sql = "update user_logs set logout_time=now() where user_id=? and logout_time is null;";
    this.connection.query(sql, [userid], callback);
  }
}

module.exports = userLogRepository;