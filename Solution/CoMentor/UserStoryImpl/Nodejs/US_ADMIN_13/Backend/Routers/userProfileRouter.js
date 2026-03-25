/**
 * User Profile Router
 * Defines all HTTP routes for user profile operations
 * SOLID Principle: Single Responsibility - Only handles route definitions
 * OOPS Concept: Abstraction - Abstracts route logic from controller
 */

const express = require("express");


module.exports = (controller) => {
  const router = express.Router();

  /**
   * GET /getUserProfile/:id
   * Retrieves a specific user's profile
   * 
   * Path Parameter:
   *   - id: User ID
   * 
   * Response:
   *   - Contains user profile with personal, academic, and professional information
   */
  router.get("/getUserProfile/:id", (req, res) => {
    controller.getUserProfile(req, res);
  });

  /**
   * GET /getUserProfiles
   * Retrieves all user profiles with pagination
   * 
   * Query Parameters:
   *   - page: Page number (optional, default: 1)
   *   - limit: Records per page (optional, default: 10)
   * 
   * Response:
   *   - Array of user profiles with pagination metadata
   */
  
  return router;
};
