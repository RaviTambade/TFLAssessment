/**
 * Admin Profile Routes
 * Defines all HTTP routes for admin profile operations
 * SOLID Principle: Single Responsibility - Only handles route definitions
 * OOPS Concept: Abstraction - Abstracts route logic from controller
 */

const express = require("express");

module.exports = (controller) => {
  const router = express.Router();

  /**
   * GET /admin-profiles/:id
   * Retrieves a specific admin's profile
   *
   * Path Parameter:
   *   - id: Admin user ID
   *
   * Response:
   *   - Contains admin profile with personal and professional information
   *
   * Example:
   *   GET /api/v1/admin-profiles/1
   */
  router.get("/admin-profiles/:id", (req, res) =>
    controller.getAdminProfile(req, res)
  );

  /**
   * Health check endpoint
   * GET /health
   */
  router.get("/health", (req, res) => {
    res.status(200).json({
      success: true,
      message: "Admin Profile Service is operational",
      timestamp: new Date().toISOString(),
    });
  });

  return router;
};
