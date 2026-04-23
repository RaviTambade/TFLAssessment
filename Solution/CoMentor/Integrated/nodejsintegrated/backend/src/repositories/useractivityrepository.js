class UserActivityRepository {
  constructor(connection) {
    this.connection = connection;
  }

  login(userid, callback) {
    const sql = "INSERT INTO user_logs (user_id,login_time) VALUES(?,now() );";
    this.connection.query(sql, [userid], callback);
  }

  logout(userid, callback) {
    const sql = "UPDATE user_logs SET logout_time=now() WHERE user_id=? AND logout_time is null;";
    this.connection.query(sql, [userid], callback);
  }

  getTotalLogins24Hours(callback) {
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

  getRecentAverageSessionTime(callback) {
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

  getTotalActiveSessions(callback) {
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

  getCurrentActiveUsers(callback) {
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
  
  getAllUserActivity(name, callback) {
    let sql = `
      SELECT
        us.id AS session_id,
        us.user_id,
        CONCAT(p.first_name,' ', p.last_name) AS full_name,
        r.role_name AS role,
        us.login_time,
        us.logout_time,
        TIMESTAMPDIFF(MINUTE, us.login_time, COALESCE(us.logout_time, NOW())) AS session_duration_minutes 
      FROM tflcomentor_db.user_logs us
      LEFT JOIN users u ON us.user_id = u.id
      LEFT JOIN personal_informations p ON us.user_id = p.user_id
      LEFT JOIN user_roles ur ON u.id = ur.user_id
      LEFT JOIN roles r ON ur.role_id = r.role_id
    `;

    const params = [];

    // Apply filter if name is provided
    if (name) {
      sql += ` WHERE CONCAT(p.first_name,' ', p.last_name) LIKE ? `;
      params.push(`%${name}%`);
    }

    sql += ` ORDER BY us.login_time DESC `;

    this.connection.query(sql, params, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
  
}

module.exports = UserActivityRepository;