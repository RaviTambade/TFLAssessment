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
    const query = "CALL GetUserProfile(?)";
    return this.connection.promise().query(query, [userId]);
  }
}

module.exports = UserProfileRepository;