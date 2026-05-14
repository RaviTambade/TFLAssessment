const UpdateUserStatusRequestDto = require("../dtos/requests/updateUserStatusRequestDto");
const UpdateUserStatusResponseDto = require("../dtos/responses/updateUserStatusResponseDto");
const ResponseGenerator = require("../helpers/responseGenerator");


class UsersController {
  constructor(usersService) {
    this.service = usersService;
  }

  getUserDetailsById(req, res) {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    this.service.getUserDetailsById(Number(userId), (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get user details",
        "User details retrieved successfully",
      );
    });
  }

  updateUserPersonalDetails(req, res) {
    const userId = req.params.userId;
    const data = req.body;
    const responseGenerator = new ResponseGenerator();

    this.service.updateUserPersonalDetails(userId, data, (err, result) => {
      console.log(err);
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to Update user Personal information",
        "User Personal information Update successfully",
      );
    });
  }

  updateUserProfessionalDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.updateUserProfessionalDetails(
      req.params.userId,
      req.body,
      (err, result) => {
        responseGenerator.generateResponse(
          res,
          err,
          result,
          "Failed to Update user Professinal information",
          "User Personal Professinal Update successfully",
        );
      },
    );
  }

  updateUserAcademicDetails(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.updateUserAcademicDetails(
      req.params.userId,
      req.body,
      (err, result) => {
        responseGenerator.generateResponse(
          res,
          err,
          result,
          "Failed to Update user Academic information",
          "User  Academic  information Update successfully",
        );
      },
    );
  
  }

  updateUserStatus(req, res) {
    const requestDto = new UpdateUserStatusRequestDto(
      req.body.user_id,
      req.body.status,
    );
    const responseGenerator = new ResponseGenerator();

    this.service.updateUserStatus(
      Number(requestDto.user_id),
      requestDto.status,
      (err, result) => {
        responseGenerator.generateResponse(
          res,
          err,
          result,
          "Failed to update User Status  ",
          " User Status update successfully",
        );
      },
    );
  }



  getUserPersonalDetails(req, res) {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    this.service.getUserPersonalDetails(Number(userId), (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get user Personal information",
        "User Personal information retrive successfully",
      );
    });
  }

  getUserAcademicDetails(req, res) {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    this.service.getUserAcademicDetails(Number(userId), (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get user Academic information",
        "User Academic information retrive successfully",
      );
    });
  }

  getUserProfessionalDetails(req, res) {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    this.service.getUserProfessionalDetails(
      Number(userId),
      (err, result) => {
        responseGenerator.generateResponse(
          res,
          err,
          result,
          "Failed to get user Professinal information",
          "User Professinal information retrive successfully",
        );
      },
    );
  }

  getAllUsers(req, res) {
     const responseGenerator = new ResponseGenerator();

    this.service.getAllUsers((err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get users ",
        "Users retrive successfully",
      );
    });
  }
}
module.exports = UsersController;
