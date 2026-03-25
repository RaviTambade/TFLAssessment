/**
 * User Profile Service
 * Contains business logic for user profile operations
 * SOLID Principles:
 *   - Single Responsibility: Only handles business logic for profiles
 *   - Dependency Inversion: Depends on UserProfileRepository abstraction
 *   - Open/Closed: Can be extended for new business logic
 * OOPS Concepts: Encapsulation, Polymorphism
 */

class UserProfileService {
  
  constructor(repository) {
    this.repository = repository;
  }

    getUserProfileById(userId, callback) {  
    this.repository.getUserProfileById(userId, callback);
  } 
}
  module.exports = UserProfileService;