/**
 * User Routes
 * Defines all HTTP routes for user operations
 * SOLID Principle: Single Responsibility - Only handles route definitions
 */

const express = require('express');
const asyncHandler = require("../middlewares/asyncHandler");

module.exports = (controller) => {
  const router = express.Router();

  /**
   * GET Routes - Retrieve User Information
   */
  
  // GET /api/users/:userId - Get complete user information
  router.get("/:userId", asyncHandler((req, res, next) => {
    controller.getUserInformationById(req, res, next);
  }));

  // GET /api/users/:userId/name - Get only user name
  router.get("/:userId/name", asyncHandler((req, res, next) => {
    controller.getUserName(req, res, next);
  }));

  // GET /api /users/:userId/complete - Get complete user profile with all details
  router.get("/:userId/complete", asyncHandler((req, res, next) => {
    controller.getUserCompleteInformation(req, res, next);
  }));

  // GET /api/v1/users/:userId/personal - Get only personal information
  router.get("/:userId/personal", asyncHandler((req, res, next) => {
    controller.getUserPersonalInformation(req, res, next);
  }));

  // GET /api/v1/users/:userId/academic - Get only academic information
  router.get("/:userId/academic", asyncHandler((req, res, next) => {
    controller.getUserAcademicInformation(req, res, next);
  }));

  // GET /api/v1/users/:userId/professional - Get only professional information
  router.get("/:userId/professional", asyncHandler((req, res, next) => {
    controller.getUserProfessionalInformation(req, res, next);
  }));

  /**
   * PUT Routes - Update User Information
   */

  // PUT /api/v1/users/:userId - Update complete user information
  router.put("/:userId", asyncHandler((req, res, next) => {
    controller.updateCompleteUserInformation(req, res, next);
  }));

  // PUT /api/v1/users/:userId/personal-info - Update personal information
  router.put("/:userId/personal-info", asyncHandler((req, res, next) => {
    controller.updatePersonalInformation(req, res, next);
  }));

  // PUT /api/v1/users/:userId/professional-info - Update professional information
  router.put("/:userId/professional-info", asyncHandler((req, res, next) => {
    controller.updateProfessionalInformation(req, res, next);
  }));

  // PUT /api/v1/users/:userId/academic-info - Update academic information
  router.put("/:userId/academic-info", asyncHandler((req, res, next) => {
    controller.updateAcademicInformation(req, res, next);
  }));

  /**
   * PATCH Routes - Partial Updates
   */

  // PATCH /api/v1/users/:userId/status - Update user status
  router.patch("/:userId/status", asyncHandler((req, res, next) => {
    controller.updateUserStatus(req, res, next);
  }));

  return router;
};