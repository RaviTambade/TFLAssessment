class SessionRepository {
  constructor(connection) {
    this.connection = connection;
  }

  getSessionLogs(name, callback) {
    let sql = `
      SELECT
        us.id AS session_id,
        us.user_id,
        p.full_name AS full_name,
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

    if (name) {
      sql += ` WHERE p.full_name LIKE ? `;
      params.push(`%${name}%`);
    }

    sql += ` ORDER BY us.login_time DESC `;

    this.connection.query(sql, params, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
}

module.exports = SessionRepository;
