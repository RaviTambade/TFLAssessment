/**
 * User Profile Repository
 * Handles all database operations for user profiles
 * SOLID Principles:
 *   - Single Responsibility: Only handles data access
 *   - Dependency Inversion: Depends on abstraction (connection interface)
 * OOPS Concepts: Encapsulation (private methods), Abstraction
 */

class UserProfileRepository {
  constructor(connection) {
    this.connection = connection;
  }

  async getUserProfileById(userId) {
    const query = `
      SELECT 
        u.id AS user_id,
        u.contact,
        u.status,
        p.first_name,
        p.last_name,
        p.gender,
        p.date_of_birth,
        p.email,
        a.enrollment_year,
        a.passing_year,
        a.percentage,
        a.college_name,
        prof.skills
      FROM users u
      LEFT JOIN personal_informations p ON u.id = p.user_id
      LEFT JOIN academic_informations a ON u.id = a.user_id
      LEFT JOIN professional_informations prof ON u.id = prof.user_id
      WHERE u.id = ?
    `;
    const [rows] = await this.connection.promise().query(query, [userId]);
    return rows[0] || null; // Assuming single user, return first row or null if not found
  }
}

module.exports = UserProfileRepository;