var fs = require('fs');

module.exports = function mentorRepository(callback) {
    return {

        readPublishAssessment(err, data) {
            var fileName = "./data/publishAssessment.json";
            if (err) {
                throw err;
            }
            else {
                var newData = JSON.parse(data.toString());
                callback(newData);
            }
            fs.readFile(fileName, readPublishAssessment);
        },

        readLearnerSkill(err, data) {
        var fileName = "../data/learnerSkill.json";
            if (err) {
                throw err;
            }
            else {
                var newData = JSON.parse(data.toString());
                (callback) = newData;
            }
            fs.readFile(fileName, readLearnerSkill);
        }
    }
}
