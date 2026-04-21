const UpdateUserStatusRequestDto = require("../dtos/requests/updateUserStatusRequestDto");
const UpdateUserStatusResponseDto = require("../dtos/responses/updateUserStatusResponseDto");

class UsersController {

  constructor(service) {
    this.service = service;
  }

  deleteUser(req, res) {
    const requestDto = new UpdateUserStatusRequestDto(req.body);
    const validationErrors = requestDto.validate();

    if (validationErrors.length > 0) {
      return res.status(400).json(
        UpdateUserStatusResponseDto.validationError(validationErrors)
      );
    }

    const { id, status } = requestDto.toServicePayload();

    this.service.deleteUser(id, status, (err, result) => {
      if (err) {
        return res.status(500).json(UpdateUserStatusResponseDto.serverError(err));
      }

      res.json(UpdateUserStatusResponseDto.success(result));
    });
  }

}

module.exports = UsersController;
