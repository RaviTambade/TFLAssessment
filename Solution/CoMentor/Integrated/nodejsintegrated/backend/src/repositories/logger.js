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

  getLoginsLast24Hrs(callback) {
    const sql = `
      SELECT COUNT(*) AS totalLogins24h
      FROM user_logs
      WHERE login_time >= NOW() - INTERVAL 1 DAY
    `;
    this.connection.query(sql, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  getAvgSessionTime(callback) {
    const sql = `
      SELECT AVG(TIMESTAMPDIFF(SECOND, login_time, logout_time)) AS avgSessionTime
      FROM (
        SELECT login_time, logout_time
        FROM user_logs
        WHERE logout_time IS NOT NULL
        ORDER BY login_time DESC
        LIMIT 20
      ) AS last20
    `;
    this.connection.query(sql, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  getActiveSessionsCount(callback) {
    const sql = `
      SELECT COUNT(*) AS activeSessions
      FROM user_logs
      WHERE logout_time IS NULL
    `;
    this.connection.query(sql, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  getActiveUsers(callback) {
    const sql = `
      SELECT 
        CONCAT(p.first_name,' ', p.last_name) AS full_name,
        l.login_time,
        TIMESTAMPDIFF(SECOND, l.login_time, NOW()) AS active_seconds
      FROM user_logs l
      JOIN personal_informations p ON l.user_id = p.user_id
      WHERE l.logout_time IS NULL
    `;
    this.connection.query(sql, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
  
}

module.exports = LoggerRepository;