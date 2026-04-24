const UpdateUserStatusRequestDto = require("../dtos/requests/updateUserStatusRequestDto");
const UpdateUserStatusResponseDto = require("../dtos/responses/updateUserStatusResponseDto");
const UserNameRequest = require("../dtos/requests/UserNameRequest")

class UsersController {

  constructor(service) {
    this.service = service;
  }

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
