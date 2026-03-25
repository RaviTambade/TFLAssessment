const repo = require("../repositories/testrepository");

exports.getAllTests = (student_id, test_id, status, callback) => {
  repo.getAllTests(student_id, test_id, status, callback);
};