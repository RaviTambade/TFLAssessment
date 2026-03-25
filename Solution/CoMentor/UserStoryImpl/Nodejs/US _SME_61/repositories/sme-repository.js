class SmeRepository {
  constructor(db) {
    this.db = db;
  }

  getFailedResults(threshold, callback) {
    const sql = `
      SELECT * FROM student_assessment_results 
      WHERE percentile < ?
    `;

    this.db.query(sql, [threshold], (err, results) => {
      if (err) {
        console.error("DB Error:", err);
        return callback(err, null);
      }

      callback(null, results);
    });
  }
}

module.exports = SmeRepository;