const ResponseGenerator = require("../helpers/responseGenerator");

class MentorsController {
  constructor(mentorService) {
    this.service = mentorService;
  }

  getMentees(req, res) {
    const mentorId = req.params.id;

    const responseGenerator = new ResponseGenerator();

    this.service.getMentees(mentorId, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get mentees",
        "Mentees retrieved successfully",
      );
    });
  }

  getMenteeCount(req, res) {
    const mentorId = req.params.id;

    const responseGenerator = new ResponseGenerator();

    this.service.getMenteeCount(mentorId, (err, result) => {
      responseGenerator.generateResponse(
        res,
        err,
        result,
        "Failed to get mentees count",
        "Mentees count retrieved successfully",
      );
    });
  }
}

module.exports = MentorsController;
