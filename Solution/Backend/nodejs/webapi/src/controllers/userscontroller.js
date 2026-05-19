const UpdateUserStatusRequestDto = require("../dtos/requests/userstatus");
const UpdateUserStatusResponseDto = require("../dtos/responses/userstatus");
const ResponseGenerator = require("../helpers/responseGenerator");

class UsersController {
  constructor(usersService) {
    this.service = usersService;
  }

  getUserDetailsById(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.getUserDetailsById(Number(req.params.userId), (err, result) => {
      var successMessage = "Failed to get user details";
      var errorMessage = "User details retrieved successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  updateUserPersonalDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.updateUserPersonalDetails(req.params.userId, req.body, (err, result) => {
      var successMessage = "Failed to Update user Personal Information";
      var errorMessage = "User Personal information Update successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  updateUserProfessionalDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.updateUserProfessionalDetails(req.params.userId, req.body, (err, result) => {
      var successMessage = "Failed to Update user Professional Information";
      var errorMessage = "User Professional information Update successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  updateUserAcademicDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.updateUserAcademicDetails(req.params.userId, req.body, (err, result) => {
      var successMessage = "Failed to Update user Academic Information";
      var errorMessage = "User Academic information Update successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  updateUserStatus(req, res) {
    const requestDto = new UpdateUserStatusRequestDto(req.body.user_id, req.body.status);
    const responseGenerator = new ResponseGenerator();

    const result = this.service.updateUserStatus(Number(requestDto.user_id), requestDto.status, (err, result) => {
      var successMessage = "Failed to update User Status";
      var errorMessage = "User Status update successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  getUserPersonalDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.getUserPersonalDetails(Number(req.params.userId), (err, result) => {
      var successMessage = "Failed to get user Personal information";
      var errorMessage = "User Personal information retrive successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  getUserAcademicDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.getUserAcademicDetails(Number(req.params.userId), (err, result) => {
      var successMessage = "Failed to get user Academic information";
      var errorMessage = "User Academic information retrive successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  getUserProfessionalDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.getUserProfessionalDetails(Number(req.params.userId), (err, result) => {
      var successMessage = "Failed to get user Professinal information";
      var errorMessage = "User Professinal information retrive successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  getAllUsers(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.getAllUsers((err, result) => {
      var successMessage = "Failed to get users";
      var errorMessage = "Users retrive successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }
}

module.exports = UsersController;