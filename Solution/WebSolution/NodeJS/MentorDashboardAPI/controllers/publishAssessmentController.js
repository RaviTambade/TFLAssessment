const publishAssessmentService = require("../services/publishAssessmentService");

var publishAssessmentController = (req, res) => {
    publishAssessmentService((newData) => {
        res.send(newData)
    });
}
module.exports = publishAssessmentController;
