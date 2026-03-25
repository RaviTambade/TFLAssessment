/**
 * User Profile Repository
 * Handles all database operations for user profiles
 * SOLID Principles:
 *   - Single Responsibility: Only handles data access
 *   - Dependency Inversion: Depends on abstraction (connection interface)
 * OOPS Concepts: Encapsulation (private methods), Abstraction
 */



class UserProfileRepository {
  /**
   * Constructor with Dependency Injection
   *
   */
  constructor(connection) {
    this.connection = connection;
  }

  
  getUserProfileById(userId, callback) {
    // Stored procedure call: GetUserProfile(IN userId INT)
    const query = "CALL GetUserProfile(?)";

    this.connection.query(query, [userId], callback);
  }
}
  module.exports = UserProfileRepository;