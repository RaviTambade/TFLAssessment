const service = require("../services/testservices");

exports.getTests = (req, res) => {
  const { student_id, test_id, status } = req.query;

  service.getAllTests(student_id, test_id, status, (err, result) => {
    if (err) return res.status(500).send(err);

    res.json(result);
  });
};