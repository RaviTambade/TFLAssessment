const UpdateUserStatusRequestDto = require("../dtos/requests/userstatus");
const UpdateUserStatusResponseDto = require("../dtos/responses/userstatus");
const ResponseGenerator = require("../helpers/responseGenerator");

class UsersController {
  constructor(usersService) {
    this.service = usersService;
  }

  getUserDetailsById(req, res) {
    const responseGenerator = new ResponseGenerator();
     this.service.getUserDetailsById(Number(req.params.userId), (err, result) => {
      var errorMessage = "Failed to get user details";
      var successMessage = "User details retrieved successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  updateUserPersonalDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
     this.service.updateUserPersonalDetails(req.params.userId, req.body, (err, result) => {
      var errorMessage = "Failed to Update user Personal Information";
      var successMessage = "User Personal information Update successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  updateUserProfessionalDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
     this.service.updateUserProfessionalDetails(req.params.userId, req.body, (err, result) => {
      var errorMessage = "Failed to Update user Professional Information";
      var successMessage = "User Professional information Update successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  updateUserAcademicDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
     this.service.updateUserAcademicDetails(req.params.userId, req.body, (err, result) => {
      var errorMessage = "Failed to Update user Academic Information";
      var successMessage = "User Academic information Update successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  updateUserStatus(req, res) {
    const requestDto = new UpdateUserStatusRequestDto(req.body.user_id, req.body.status);
    const responseGenerator = new ResponseGenerator();

     this.service.updateUserStatus(Number(requestDto.user_id), requestDto.status, (err, result) => {
      var errorMessage = "Failed to update User Status";
      var successMessage = "User Status update successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  getUserPersonalDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
     this.service.getUserPersonalDetails(Number(req.params.userId), (err, result) => {
      var errorMessage = "Failed to get user Personal information";
      var successMessage = "User Personal information retrive successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  getUserAcademicDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
     this.service.getUserAcademicDetails(Number(req.params.userId), (err, result) => {
      var errorMessage = "Failed to get user Academic information";
      var successMessage = "User Academic information retrive successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  getUserProfessionalDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
     this.service.getUserProfessionalDetails(Number(req.params.userId), (err, result) => {
      var errorMessage = "Failed to get user Professinal information";
      var successMessage = "User Professinal information retrive successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  getAllUsers(req, res) {
    const responseGenerator = new ResponseGenerator();
     this.service.getAllUsers((err, result) => {
      var errorMessage = "Failed to get users";
      var successMessage = "Users retrive successfully";
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }
}

module.exports = UsersController;