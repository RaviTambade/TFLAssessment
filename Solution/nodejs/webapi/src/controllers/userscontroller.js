const UpdateUserStatusRequestDto = require("../dtos/requests/updateUserStatusRequestDto");
const UpdateUserStatusResponseDto = require("../dtos/responses/updateUserStatusResponseDto");
const ResponseGenerator = require("../helpers/ResponseGenerator");


class UsersController {
  constructor(usersService) {
    this.service = usersService;
  }

  getUserInformationById(req, res) {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    this.service.getUserInformationById(Number(userId), (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get user information",
        "User information retrive successfully",
      );
    });
  }

  updatePersonal(req, res) {
    const userId = req.params.userId;
    const data = req.body;
    const responseGenerator = new ResponseGenerator();

    this.service.updatePersonal(userId, data, (err, result) => {
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

  updateProfessional(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = this.service.updateProfessional(
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

  updateAcademic(req, res) {
    const result = this.service.updateAcademic(
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
    res.json({ success: true, result });
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

  getUserCompleteInformation(req, res) {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    this.service.getUserCompleteInformation(Number(userId), (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get user complete information",
        "User complete information retrive successfully",
      );
    });
  }

  getUserPersonalInformation(req, res) {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    this.service.getUserPersonalInformation(Number(userId), (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get user Personal information",
        "User Personal information retrive successfully",
      );
    });
  }

  getUserAcademicInformation(req, res) {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    this.service.getUserAcademicInformation(Number(userId), (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get user Academic information",
        "User Academic information retrive successfully",
      );
    });
  }

  getUserProfessionalInformation(req, res) {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    this.service.getUserProfessionalInformation(
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
