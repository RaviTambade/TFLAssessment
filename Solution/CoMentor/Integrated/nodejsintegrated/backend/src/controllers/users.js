/**
 * User Controller
 * Handles HTTP request/response for user operations
 * SOLID Principle: Single Responsibility - Only handles HTTP layer
 */

const UpdateUserStatusRequestDto = require("../dtos/requests/updateUserStatusRequestDto");
const UpdateUserStatusResponseDto = require("../dtos/responses/updateUserStatusResponseDto");
const UserNameRequest = require("../dtos/requests/UserNameRequest")

class Users {

  constructor(service) {
    this.service = service;
  }

  /**
   * GET /api/v1/users/:userId
   * Retrieve complete user information by user ID
   */

onError = (err, result, res, successMessage = "Success") => {
  if (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message
    });
  }

  return res.status(200).json({
    success: true,
    message: successMessage,
    data: result
  });
};


getUserInformationById = (req, res) => {
  const userId = req.params.userId;
  this.service.getUserInformationById(Number(userId),(err, result) => this.onError(err, result, res));
};


getUserName = (req, res, next) => {
    const userid = new UserNameRequest(req.params.userId);
    this.service.getUserName(userid, (err, result) =>this.onError(err, result, res));
  };


updateCompleteUserInformation = (req, res, next) => {
    const userId = req.params.userId;
      const data = req.body;
      this.service.updateCompleteUserInformation(Number(userId), data, (err, result) => this.onError(err, result, res));
  };

  /**
   * PUT /api/v1/users/:userId/personal-info
   * Update personal information
   */
  updatePersonalInformation = (req, res, next) => {
      const userId = req.params.userId;
      const data = req.body;
      this.service.updatePersonalInformation(Number(userId), data, (err, result) => this.onError(err, result, res));
  };

  
  updateProfessionalInformation = (req, res, next) => {
    const userId = req.params.userId;
    const data = req.body;
    
      this.service.updateProfessionalInformation(Number(userId), data, (err, result) => this.onError(err, result, res));
  };

  /**
   * PUT /api/v1/users/:userId/academic-info
   * Update academic information
   */
  updateAcademicInformation = (req, res, next) => {
    const userId = req.params.userId;
    const data = req.body;
    this.service.updateAcademicInformation(Number(userId), data, (err, result) => this.onError(err, result, res));
  };


  updateUserStatus = (req, res, next) => {
    const requestDto = new UpdateUserStatusRequestDto(req.body);
    const validationErrors = requestDto.validate();
    this.service.updateUserStatus(Number(id), status, (err, result) => this.onError(err, result, res, "User status updated successfully"));
  };

 
  getUserCompleteInformation = (req, res, next) => {
    const userId = req.params.userId;
    this.service.getUserCompleteInformation(Number(userId), (err, result) => this.onError(err, result, res, "Complete user information retrieved successfully"));
         
  };

  /**
   * GET /api/v1/users/:userId/personal
   * Get only personal information
   */
  getUserPersonalInformation = (req, res, next) => {
    const userId = req.params.userId;
    
      this.service.getUserPersonalInformation(Number(userId), (err, result) => this.onError(err, result, res, "Personal information retrieved successfully"));
  };

  /**
   * GET /api/v1/users/:userId/academic
   * Get only academic information
   */
  getUserAcademicInformation = (req, res, next) => {
    const userId = req.params.userId;
    this.service.getUserAcademicInformation(Number(userId), (err, result) => this.onError(err, result, res, "Academic information retrieved successfully"));
  };


  getUserProfessionalInformation = (req, res, next) => {
    const userId = req.params.userId;
    this.service.getUserProfessionalInformation(Number(userId), (err, result) => this.onError(err, result, res, "Professional information retrieved successfully"));
  };
}
module.exports = Users;
