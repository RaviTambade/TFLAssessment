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
}

module.exports = SessionRepository;