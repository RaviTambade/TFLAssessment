const ResponseGenerator = require("../helpers/responseGenerator");

class MentorsController {
  constructor(mentorService) {
    this.service = mentorService;
  }

  getMentees(req, res) {
    const mentorId = req.params.id;

    const responseGenerator = new ResponseGenerator();
    var successMessage = "Failed to get mentees";
    var errorMessage = "Mentees retrieved successfully";
    this.service.getMentees(mentorId, (err, result) => {
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }

  getMenteeCount(req, res) {
    const mentorId = req.params.id;

    const responseGenerator = new ResponseGenerator();
    var successMessage = "Failed to get mentees count";
    var errorMessage = "Mentees count retrieved successfully";
    this.service.getMenteeCount(mentorId, (err, result) => {
      responseGenerator.generateResponse(res, err, result, successMessage, errorMessage);
    });
  }
}

module.exports = MentorsController;
