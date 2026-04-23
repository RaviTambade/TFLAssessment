/**
 * User Controller
 * Handles HTTP request/response for user operations
 * SOLID Principle: Single Responsibility - Only handles HTTP layer
 */

const UpdateUserStatusRequestDto = require("../dtos/requests/updateUserStatusRequestDto");
const UpdateUserStatusResponseDto = require("../dtos/responses/updateUserStatusResponseDto");
const UserNameRequest = require("../dtos/requests/UserNameRequest")

class UsersController {

  constructor(service) {
    this.service = service;
  }

  /**
   * GET /api/v1/users/:userId
   * Retrieve complete user information by user ID
   */
  async getUserInformationById(req, res, next) {
    try {
      const userId = req.params.userId;
      
      if (!userId || Number.isNaN(Number(userId))) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID provided",
          statusCode: 400,
          data: null
        });
      }

      const result = await this.service.getUserInformationById(Number(userId));
      return res.status(result.statusCode || 200).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/v1/users/:userId/name
   * Retrieve only user name
   */
  getUserName = (req, res, next) => {
    try {
      const userid = new UserNameRequest(req.params.userId);
      this.service.getUserName(userid, (err, result) => {
        if (err) {
          console.error("Error fetching username:", err);
          return res.status(500).json({ 
            success: false,
            message: "Error fetching username",
            error: err.message 
          });
        }

        if (!result) {
          return res.status(404).json({ 
            success: false,
            message: "Username not found",
            data: null 
          });
        }

        return res.status(200).json({
          success: true,
          message: "Username retrieved successfully",
          data: result
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * PUT /api/v1/users/:userId
   * Update complete user information
   */
  updateCompleteUserInformation = (req, res, next) => {
    try {
      const userId = req.params.userId;
      const data = req.body;

      if (!userId || Number.isNaN(Number(userId))) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID provided",
          statusCode: 400
        });
      }

      this.service.updateCompleteUserInformation(Number(userId), data, (err, result) => {
        if (err) {
          console.error("Error updating complete user information:", err);
          return res.status(500).json({
            success: false,
            message: "Error updating complete user information",
            error: err.message
          });
        }

        return res.status(200).json({
          success: true,
          message: "Complete user information updated successfully",
          data: result
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * PUT /api/v1/users/:userId/personal-info
   * Update personal information
   */
  updatePersonalInformation = (req, res, next) => {
    try {
      const userId = req.params.userId;
      const data = req.body;

      if (!userId || Number.isNaN(Number(userId))) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID provided",
          statusCode: 400
        });
      }

      this.service.updatePersonalInformation(Number(userId), data, (err, result) => {
        if (err) {
          console.error("Error updating personal information:", err);
          return res.status(500).json({
            success: false,
            message: "Error updating personal information",
            error: err.message
          });
        }

        return res.status(200).json({
          success: true,
          message: "Personal information updated successfully",
          data: result
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * PUT /api/v1/users/:userId/professional-info
   * Update professional information
   */
  updateProfessionalInformation = (req, res, next) => {
    try {
      const userId = req.params.userId;
      const data = req.body;

      if (!userId || Number.isNaN(Number(userId))) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID provided",
          statusCode: 400
        });
      }

      this.service.updateProfessionalInformation(Number(userId), data, (err, result) => {
        if (err) {
          console.error("Error updating professional information:", err);
          return res.status(500).json({
            success: false,
            message: "Error updating professional information",
            error: err.message
          });
        }

        return res.status(200).json({
          success: true,
          message: "Professional information updated successfully",
          data: result
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * PUT /api/v1/users/:userId/academic-info
   * Update academic information
   */
  updateAcademicInformation = (req, res, next) => {
    try {
      const userId = req.params.userId;
      const data = req.body;

      if (!userId || Number.isNaN(Number(userId))) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID provided",
          statusCode: 400
        });
      }

      this.service.updateAcademicInformation(Number(userId), data, (err, result) => {
        if (err) {
          console.error("Error updating academic information:", err);
          return res.status(500).json({
            success: false,
            message: "Error updating academic information",
            error: err.message
          });
        }

        return res.status(200).json({
          success: true,
          message: "Academic information updated successfully",
          data: result
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * PATCH /api/v1/users/:userId/status
   * Update user status
   */
  updateUserStatus = (req, res, next) => {
    try {
      const requestDto = new UpdateUserStatusRequestDto(req.body);
      const validationErrors = requestDto.validate();

      if (validationErrors.length > 0) {
        return res.status(400).json(
          UpdateUserStatusResponseDto.validationError(validationErrors)
        );
      }

      const { id, status } = requestDto.toServicePayload();

      if (!id || Number.isNaN(Number(id))) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID provided",
          statusCode: 400
        });
      }

      this.service.updateUserStatus(Number(id), status, (err, result) => {
        if (err) {
          return res.status(500).json(UpdateUserStatusResponseDto.serverError(err));
        }

        res.json(UpdateUserStatusResponseDto.success(result));
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/v1/users/:userId/complete
   * Get complete user profile with all details
   */
  getUserCompleteInformation = (req, res, next) => {
    try {
      const userId = req.params.userId;

      if (!userId || Number.isNaN(Number(userId))) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID provided",
          statusCode: 400,
          data: null
        });
      }

      this.service.getUserCompleteInformation(Number(userId), (err, result) => {
        if (err) {
          console.error("Error fetching complete user information:", err);
          return res.status(500).json({
            success: false,
            message: "Error fetching complete user information",
            error: err.message
          });
        }

        if (!result) {
          return res.status(404).json({
            success: false,
            message: "User complete information not found",
            data: null
          });
        }

        return res.status(200).json({
          success: true,
          message: "User complete information retrieved successfully",
          data: result
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/v1/users/:userId/personal
   * Get only personal information
   */
  getUserPersonalInformation = (req, res, next) => {
    try {
      const userId = req.params.userId;

      if (!userId || Number.isNaN(Number(userId))) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID provided",
          statusCode: 400,
          data: null
        });
      }

      this.service.getUserPersonalInformation(Number(userId), (err, result) => {
        if (err) {
          console.error("Error fetching personal information:", err);
          return res.status(500).json({
            success: false,
            message: "Error fetching personal information",
            error: err.message
          });
        }

        if (!result) {
          return res.status(404).json({
            success: false,
            message: "Personal information not found",
            data: null
          });
        }

        return res.status(200).json({
          success: true,
          message: "Personal information retrieved successfully",
          data: result
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/v1/users/:userId/academic
   * Get only academic information
   */
  getUserAcademicInformation = (req, res, next) => {
    try {
      const userId = req.params.userId;

      if (!userId || Number.isNaN(Number(userId))) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID provided",
          statusCode: 400,
          data: null
        });
      }

      this.service.getUserAcademicInformation(Number(userId), (err, result) => {
        if (err) {
          console.error("Error fetching academic information:", err);
          return res.status(500).json({
            success: false,
            message: "Error fetching academic information",
            error: err.message
          });
        }

        if (!result) {
          return res.status(404).json({
            success: false,
            message: "Academic information not found",
            data: null
          });
        }

        return res.status(200).json({
          success: true,
          message: "Academic information retrieved successfully",
          data: result
        });
      });
    } catch (error) {
      next(error);
    }
  };

  /**
   * GET /api/v1/users/:userId/professional
   * Get only professional information
   */
  getUserProfessionalInformation = (req, res, next) => {
    try {
      const userId = req.params.userId;

      if (!userId || Number.isNaN(Number(userId))) {
        return res.status(400).json({
          success: false,
          message: "Invalid user ID provided",
          statusCode: 400,
          data: null
        });
      }

      this.service.getUserProfessionalInformation(Number(userId), (err, result) => {
        if (err) {
          console.error("Error fetching professional information:", err);
          return res.status(500).json({
            success: false,
            message: "Error fetching professional information",
            error: err.message
          });
        }

        if (!result) {
          return res.status(404).json({
            success: false,
            message: "Professional information not found",
            data: null
          });
        }

        return res.status(200).json({
          success: true,
          message: "Professional information retrieved successfully",
          data: result
        });
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UsersController;
