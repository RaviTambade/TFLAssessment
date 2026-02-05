var fs = require('fs');
var publishAssessmentRepository = (callback) => {
    var fileName = "./data/publishAssessment.json";

    var readPublishAssessment = function (err, data) {
        if (err) {
            throw err;
        }
        else {
            var newData = JSON.parse(data.toString());
            callback(newData);
        }
    }
    fs.readFile(fileName, readPublishAssessment);
}
module.exports = publishAssessmentRepository;
