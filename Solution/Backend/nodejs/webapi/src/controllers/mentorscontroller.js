const ResponseGenerator = require("../helpers/responseGenerator");

class MentorsController {
  constructor(mentorService) {
    this.service = mentorService;
  }

  getMentees(req, res) {
    const mentorId = req.params.id;

    const responseGenerator = new ResponseGenerator();
    var errorMessage = "Failed to get mentees";
    var successMessage = "Mentees retrieved successfully";
    this.service.getMentees(mentorId, (err, result) => {
      responseGenerator.generateResponse(res, err, result, errorMessage ,successMessage );
    });
  }

  getMenteeCount(req, res) {
    const mentorId = req.params.id;

    const responseGenerator = new ResponseGenerator();
    var errorMessage = "Failed to get mentees count";
    var successMessage = "Mentees count retrieved successfully";
    this.service.getMenteeCount(mentorId, (err, result) => {
      responseGenerator.generateResponse(res, err, result, errorMessage ,successMessage );
    });
  }
}

module.exports = MentorsController;
