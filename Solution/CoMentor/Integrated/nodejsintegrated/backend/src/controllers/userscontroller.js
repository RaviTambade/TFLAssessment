const UpdateUserStatusRequestDto = require("../dtos/requests/updateUserStatusRequestDto");
const UpdateUserStatusResponseDto = require("../dtos/responses/updateUserStatusResponseDto");
const UserNameRequest = require("../dtos/requests/UserNameRequest")
const ResponseGenerator = require("../helpers/ResponseGenerator");


class UsersController {

  constructor(usersService) {
    this.service = usersService;
  }

  getUserInformationById = (req, res) => {
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
  };

  // getUserName = (req, res, next) => {
  //   const userid = new UserNameRequest(req.params.userId);
  //   this.service.getUserName(userid, (err, result) => this.onError(err, result, res));
  // };

  updatePersonal(req, res) {
    const userId = req.params.id;
    const data = req.body;
    const responseGenerator = new ResponseGenerator();
    profileService.updatePersonal(userId, data, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to Update user Personal information",
        "User Personal information Update successfully",
      );
    });
  };

  updateProfessional(req, res) {
    const responseGenerator = new ResponseGenerator();
    const result = profileService.updateProfessional(req.params.id, req.body, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to Update user Professinal information",
        "User Personal Professinal Update successfully",
      );
    });
  };

  updateAcademic(req, res) {
    const result = profileService.updateAcademic(req.params.id, req.body, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to Update user Academic information",
        "User  Academic  information Update successfully",
      );
    });
    res.json({ success: true, result });
  };

  updateUserStatus (req, res, next) {
    const requestDto = new UpdateUserStatusRequestDto(req.body);
    const validationErrors = requestDto.validate();
    this.service.updateUserStatus(Number(id), status, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to update User Status  ",
        "  User Status update successfully",
      );
    });
  };


  getUserCompleteInformation = (req, res, next) => {
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

  };

  getUserPersonalInformation = (req, res, next) => {
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
  };

  getUserAcademicInformation = (req, res, next) => {
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
  };


  getUserProfessionalInformation = (req, res, next) => {
    const userId = req.params.userId;
    const responseGenerator = new ResponseGenerator();

    this.service.getUserProfessionalInformation(Number(userId), (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get user Professinal information",
        "User Professinal information retrive successfully",
      );
    });
  };
}
module.exports = UsersController;
