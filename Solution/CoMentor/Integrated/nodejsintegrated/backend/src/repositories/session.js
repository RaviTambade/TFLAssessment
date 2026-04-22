class SessionRepository {
  constructor(db) {
    this.db = db;
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
