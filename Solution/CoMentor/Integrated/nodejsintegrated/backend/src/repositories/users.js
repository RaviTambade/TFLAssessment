/**
 * User Repository
 * Data access layer for user operations
 * SOLID Principle: Single Responsibility - Only handles database operations
 */

class Users {

  constructor(db) {
    this.db = db;
  }

  /**
   * Get complete user information by user ID
   * Async method using promise-based queries
   */
  async getUserInformationById(userId) {
    const query = `
      SELECT  u.id AS user_id, u.contact, u.status, p.first_name, p.last_name,
        p.gender, p.date_of_birth,  p.email, a.enrollment_year,
        a.passing_year, a.percentage, a.college_name, prof.skills
      FROM users u
      LEFT JOIN personal_informations p ON u.id = p.user_id
      LEFT JOIN academic_informations a ON u.id = a.user_id
      LEFT JOIN professional_informations prof ON u.id = prof.user_id
      WHERE u.id = ?`;
    
    try {
      const [rows] = await this.db.promise().query(query, [userId]);
      return rows[0] || null;
    } catch (error) {
      console.error("Error in getUserInformationById:", error);
      throw error;
    }
  }

  /**
   * Get complete user profile using stored procedure
   * Callback-based method
   */
  getUserCompleteInformation(userId, callback) {
    const query = `CALL sp_get_user_complete_profile(?)`;
    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);
      const profile = results[0];
      callback(null, profile);
    });
  }

  /**
   * Get user personal information
   * Callback-based helper method
   */
  getUserPersonalInformation(userId, callback) {
    const query = `SELECT first_name, last_name, email
      FROM personal_informations
      WHERE user_id = ?`;

    this.getUserInformation(userId, query, callback);
  }

  /**
   * Get user academic information
   * Callback-based helper method
   */
  getUserAcademicInformation(userId, callback) {
    const query = `SELECT enrollment_year, passing_year, percentage, college_name, stream_name, specialization
      FROM academic_informations
      WHERE user_id = ?`;

    this.getUserInformation(userId, query, callback);
  }

  /**
   * Get user professional information
   * Callback-based helper method
   */
  getUserProfessionalInformation(userId, callback) {
    const query = `SELECT company_name, job_title, employment_type, start_date, end_date, is_current_job, experience_years, location, skills
      FROM professional_informations
      WHERE user_id = ?`;

    this.getUserInformation(userId, query, callback);
  }

  /**
   * Helper function to avoid code duplication
   * Executes query and returns first result or null
   */
  getUserInformation(userId, query, callback) {
    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);
      const userInformation = results.length > 0 ? results[0] : null;
      callback(null, userInformation);
    });
  }

  /**
   * Get only user name
   * Callback-based method
   */
  getUserName(userNameRequest, callback) {
    const sql = "SELECT first_name, last_name FROM personal_informations WHERE user_id = ? LIMIT 1";

    this.db.query(sql, [userNameRequest.userid], (err, result) => {
      if (err) {
        console.error("Error fetching username:", err);
        return callback(err, null);
      }

      if (!result || result.length === 0) {
        return callback(null, null);
      }

      callback(null, result[0]);
    });
  }

  /**
   * Update complete user information (all sections)
   * Uses stored procedure for transaction safety
   */
  updateCompleteUserInformation(userId, data, callback) {
    const query = `CALL sp_update_user_complete_profile(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const values = [
      userId,
      // Personal
      data.first_name ?? null,
      data.last_name ?? null,
      data.gender ?? null,
      data.date_of_birth ? new Date(data.date_of_birth).toISOString().slice(0, 10) : null,
      data.email ?? null,
      data.address ?? null,
      data.pincode ?? null,
      // Professional
      data.company_name ?? null,
      data.job_title ?? null,
      data.employment_type ?? null,
      data.start_date ? new Date(data.start_date).toISOString().split("T")[0] : null,
      data.end_date ? new Date(data.end_date).toISOString().split("T")[0] : null,
      data.is_current_job ?? null,
      data.experience_years ?? null,
      data.location ?? null,
      data.skills ?? null,
      // Academic
      data.stream_name ?? null,
      data.specialization ?? null,
      data.enrollment_year ?? null,
      data.passing_year ?? null,
      data.percentage ?? null,
      data.college_name ?? null
    ];

    this.db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
    });
  }

  /**
   * Update only personal information
   * Uses stored procedure for consistency
   */
  updatePersonInformation(userId, data, callback) {
    const query = `CALL sp_update_personal_information(?, ?, ?, ?, ?, ?, ?, ?);`;

    const values = [
      userId,
      data.first_name ?? null,
      data.last_name ?? null,
      data.gender ?? null,
      data.date_of_birth ? new Date(data.date_of_birth).toISOString().slice(0, 10) : null,
      data.email ?? null,
      data.address ?? null,
      data.pincode ?? null
    ];

    this.db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
    });
  }

  /**
   * Update only professional information
   * Uses stored procedure for consistency
   */
  updateProfessionalInformation(userId, data, callback) {
    const query = `CALL sp_update_professional_information(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const values = [
      userId,
      data.company_name ?? null,
      data.job_title ?? null,
      data.employment_type ?? null,
      data.start_date ? new Date(data.start_date).toISOString().slice(0, 19).replace("T", " ") : null,
      data.end_date ? new Date(data.end_date).toISOString().slice(0, 19).replace("T", " ") : null,
      data.is_current_job ?? null,
      data.experience_years ?? null,
      data.location ?? null,
      data.skills ?? null
    ];

    this.db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
    });
  }

  /**
   * Update only academic information
   * Uses stored procedure for consistency
   */
  updateAcademicInformation(userId, data, callback) {
    const query = `CALL sp_update_academic_information(?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      userId,
      data.stream_name ?? null,
      data.specialization ?? null,
      data.enrollment_year ?? null,
      data.passing_year ?? null,
      data.percentage ?? null,
      data.college_name ?? null
    ];

    this.db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
    });
  }

  /**
   * Update user status (ACTIVE, INACTIVE, BLOCKED)
   * Direct SQL update
   */
  updateUserStatus(userId, status, callback) {
    const sql = "UPDATE users SET status = ? WHERE id = ?";
    this.db.query(sql, [status, userId], callback);
  }

}

module.exports = Users;