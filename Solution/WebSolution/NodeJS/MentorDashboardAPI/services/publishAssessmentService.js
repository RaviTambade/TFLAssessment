const publishAssessmentRepository = require("../repositories/publishAssessmentRepository");
var publishAssessmentService = (callback) => {
    publishAssessmentRepository((newData) => {
        callback(newData);
    });

}
module.exports = publishAssessmentService;