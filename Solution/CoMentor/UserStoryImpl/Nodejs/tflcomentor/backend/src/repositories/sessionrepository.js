class SessionRepository {
  constructor(db) {
    this.db = db;
  }

  async getLoginsLast24Hrs() {
    const [rows] = await this.db.promise().query(`
      SELECT COUNT(*) AS totalLogins24h
      FROM user_logs
      WHERE login_time >= NOW() - INTERVAL 1 DAY
    `);
    return rows[0];
  }

  async getAvgSessionTime() {
    const [rows] = await this.db.promise().query(`
      SELECT AVG(TIMESTAMPDIFF(SECOND, login_time, logout_time)) AS avgSessionTime
      FROM (
        SELECT login_time, logout_time
        FROM user_logs
        WHERE logout_time IS NOT NULL
        ORDER BY login_time DESC
        LIMIT 20
      ) AS last20
    `);
    return rows[0];
  }

  async getActiveSessionsCount() {
    const [rows] = await this.db.promise().query(`
      SELECT COUNT(*) AS activeSessions
      FROM user_logs
      WHERE logout_time IS NULL
    `);
    return rows[0];
  }

  async getActiveUsers() {
    const [rows] = await this.db.promise().query(`
      SELECT 
        CONCAT(p.first_name,' ', p.last_name) AS full_name,
        l.login_time,
        TIMESTAMPDIFF(SECOND, l.login_time, NOW()) AS active_seconds
      FROM user_logs l
      JOIN personal_informations p ON l.user_id = p.user_id
      WHERE l.logout_time IS NULL
    `);
    return rows;
  }

  //Samruddhi
  async getSessionLogs(name) {
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

    const [rows] = await this.db.promise().query(sql, params);
    return rows;
  }
}

module.exports = SessionRepository;
