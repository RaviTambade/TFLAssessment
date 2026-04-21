class LoggerRepository {
  constructor(connection) {
    this.connection = connection;
  }

  LoginEntry(userid, callback) {
    const sql = "insert into user_logs (user_id,login_time) values(?,now() );";
    this.connection.query(sql, [userid], callback);
  }

  LogoutEntry(userid, callback) {
    const sql = "update user_logs set logout_time=now() where user_id=? and logout_time is null;";
    this.connection.query(sql, [userid], callback);
  }
}

module.exports = LoggerRepository;