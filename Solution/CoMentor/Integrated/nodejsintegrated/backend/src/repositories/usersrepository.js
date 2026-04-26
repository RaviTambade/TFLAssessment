class UsersRepository {
  constructor(connection) {
    this.connection = connection;
  }

  getUserInformationById(userId, callback) {
    const query = `
      SELECT  u.id AS user_id, u.contact, u.status, p.first_name, p.last_name,
        p.gender, p.date_of_birth,  p.email, a.enrollment_year,
        a.passing_year, a.percentage, a.college_name, prof.skills
      FROM users u
      LEFT JOIN personal_informations p ON u.id = p.user_id
      LEFT JOIN academic_informations a ON u.id = a.user_id
      LEFT JOIN professional_informations prof ON u.id = prof.user_id
      WHERE u.id = ?`;

    this.connection.query(query, [userId], callback);
  }

  getUserCompleteInformation(userId, callback) {
    const query = `CALL sp_get_user_complete_profile(?)`;
    this.connection.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);
      const profile = results[0];
      callback(null, profile);
    });
  }

  getUserPersonalInformation(userId, callback) {
    const query = `SELECT first_name, last_name, email
      FROM personal_informations
      WHERE user_id = ?`;

    this.getUserInformation(userId, query, callback);
  }

  getUserAcademicInformation(userId, callback) {
    const query = `SELECT enrollment_year, passing_year, percentage, college_name, stream_name, specialization
      FROM academic_informations
      WHERE user_id = ?`;

    this.getUserInformation(userId, query, callback);
  }

  getUserProfessionalInformation(userId, callback) {
    const query = `SELECT company_name, job_title, employment_type, start_date, end_date, is_current_job, experience_years, location, skills
      FROM professional_informations
      WHERE user_id = ?`;

    this.getUserInformation(userId, query, callback);
  }

  getUserInformation(userId, query, callback) {
    this.connection.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);
      const userInformation = results.length > 0 ? results[0] : null;
      callback(null, userInformation);
    });
  }

  updatePersonal(userId, data, callback) {
    const fields = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = Object.values(data);
    const sql = `UPDATE personal_informations SET ${fields} WHERE user_id = ?`;
    this.connection.query(sql, [...values, userId], callback);
  }

  updateProfessional(userId, data, callback) {
    const fields = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = Object.values(data);
    const sql = `UPDATE professional_informations SET ${fields} WHERE user_id = ?`;
    this.connection.query(sql, [...values, userId], callback);
  }

  updateAcademic(userId, data, callback) {
    const fields = Object.keys(data)
      .map((key) => `${key} = ?`)
      .join(", ");

    const values = Object.values(data);
    const sql = `UPDATE academic_informations SET ${fields} WHERE user_id = ?`;
    this.connection.query(sql, [...values, userId], callback);
  }

  updateUserStatus(userId, status, callback) {
    const sql = "UPDATE users SET status = ? WHERE id = ?";
    this.connection.query(sql, [status, userId], callback);
  }

  getAllUsers(callback) {
    const query = ` SELECT 
        p.user_id, 
        CONCAT(p.first_name, ' ', p.last_name) AS full_name, 
        u.created_at,
        u.status,
        r.role_name
    FROM personal_informations p
    LEFT JOIN user_roles ur ON p.user_id = ur.user_id
    LEFT JOIN roles r ON ur.role_id = r.role_id
    LEFT JOIN users u ON p.user_id = u.id 
    ORDER BY p.user_id;`;
    this.connection.query(query, callback);
  }
}

module.exports = UsersRepository;