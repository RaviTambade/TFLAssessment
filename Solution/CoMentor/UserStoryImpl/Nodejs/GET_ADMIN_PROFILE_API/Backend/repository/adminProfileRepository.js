/**
 * Admin Profile Repository
 * Handles all database operations for admin profiles
 * SOLID Principles:
 *   - Single Responsibility: Only handles data access
 *   - Dependency Inversion: Depends on abstraction (database connection)
 * OOPS Concepts: Encapsulation, Abstraction
 */

class AdminProfileRepository {
  /**
   * Constructor with dependency injection
   * @param {Connection} db - Database connection instance
   */
  constructor(db) {
    if (!db) {
      throw new Error("Database connection is required");
    }
    this.db = db;
  }

  /**
   * Retrieve admin profile by user ID
   * @param {number} userId - Admin user ID
   * @param {Function} callback - Callback function (err, profile)
   * @returns {void}
   */
  getAdminProfile(userId, callback) {
    const query = `
      SELECT 
        pinfo.user_id,
        pinfo.first_name,
        pinfo.last_name,
        pinfo.full_name,
        pinfo.gender,
        pinfo.date_of_birth,
        pinfo.email,
        pinfo.address,
        pinfo.pincode,
        pi.id AS professional_id,
        pi.company_name,
        pi.job_title,
        pi.employment_type,
        pi.start_date,
        pi.end_date,
        pi.is_current_job,
        pi.experience_years,
        pi.location,
        pi.skills
      FROM personal_informations pinfo
      LEFT JOIN professional_informations pi
        ON pinfo.user_id = pi.user_id
      JOIN user_roles ur
        ON pinfo.user_id = ur.user_id
      WHERE pinfo.user_id = ?
        AND ur.role_id = 1;
    `;

    this.db.query(query, [userId], (error, rows) => {
      if (error) return callback(error, null);
      if (!rows.length) return callback(null, null);

      const firstRow = rows[0];
      const adminProfile = {
        personalInfo: {
          userId: firstRow.user_id,
          firstName: firstRow.first_name,
          lastName: firstRow.last_name,
          fullName: firstRow.full_name,
          gender: firstRow.gender,
          dateOfBirth: firstRow.date_of_birth,
          email: firstRow.email,
          address: firstRow.address,
          pincode: firstRow.pincode,
        },
        professionalInfo: rows
          .filter((row) => row.professional_id !== null)
          .map((row) => ({
            id: row.professional_id,
            companyName: row.company_name,
            jobTitle: row.job_title,
            employmentType: row.employment_type,
            startDate: row.start_date,
            endDate: row.end_date,
            isCurrentJob: row.is_current_job,
            experienceYears: row.experience_years,
            location: row.location,
            skills: row.skills,
          })),
      };

      callback(null, adminProfile);
    });
  }
}

module.exports = AdminProfileRepository;
