const db = require("../connectivity/db");

exports.getAllTests = (student_id, test_id, status, callback) => {
  let query = `
    SELECT a.test_id, a.student_id, a.status, t.title
    FROM assessments a
    JOIN tests t ON t.id = a.test_id
    WHERE 1=1
  `;

  let params = [];

  if (student_id) {
    query += " AND a.student_id = ?";
    params.push(student_id);
  }

  if (test_id) {
    query += " AND a.test_id = ?";
    params.push(test_id);
  }

  if (status) {
    query += " AND a.status = ?";
    params.push(status);
  } else {
    query += " AND a.status IN ('Assigned','Completed','Pending')";
  }

  db.query(query, params, callback);
};