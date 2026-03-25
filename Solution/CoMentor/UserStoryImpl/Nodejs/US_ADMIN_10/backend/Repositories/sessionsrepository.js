class SessionsRepository {
  constructor(connection) {
    this.connection = connection;
  }

  getAllSessionLogs(callback) {
    // Keep data access in the repository and return a DB-friendly shape to the service.
    const sql = `
      SELECT
        us.id AS session_id,
        us.user_id,
        r.role_name AS role,
        us.login_time,
        us.logout_time,
        TIMESTAMPDIFF(MINUTE, us.login_time, COALESCE(us.logout_time, NOW())) AS session_duration_minutes
      FROM tflcomentor_db.user_logs us
      LEFT JOIN users u ON us.user_id = u.id
      LEFT JOIN user_roles ur ON u.id = ur.user_id
      LEFT JOIN roles r ON ur.role_id = r.role_id
      ORDER BY us.login_time DESC
    `;

    this.connection.query(sql, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
}

module.exports = SessionsRepository;
