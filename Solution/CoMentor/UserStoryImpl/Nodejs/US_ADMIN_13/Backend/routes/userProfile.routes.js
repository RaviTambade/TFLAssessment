/**
 * User Profile Router
 * Defines all HTTP routes for user profile operations
 * SOLID Principle: Single Responsibility - Only handles route definitions
 * OOPS Concept: Abstraction - Abstracts route logic from controller
 */

const express = require("express");
const asyncHandler = require("../middlewares/asyncHandler");

module.exports = (controller) => {
  const router = express.Router();

  /**
   * GET /api/v1/user-profiles/:id
   * Retrieves a specific user's profile by user id
   */
  router.get("/:id", asyncHandler((req, res, next) => {
    controller.getUserProfile(req, res, next);
  }));

  return router;
};
