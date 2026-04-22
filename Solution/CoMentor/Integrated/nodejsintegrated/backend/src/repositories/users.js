class UserInformationRepository {

  constructor(db) {
    this.db = db;
  }
git sg
  deleteUser(id, status, callback) {
    const sql = "UPDATE Users SET status = ? WHERE id = ?";
    this.db.query(sql, [status, id], callback);
  }
  
  getUserPersonalInformation(userId, callback) {
    const query = `SELECT first_name, last_name, email
                  FROM personal_informations
                  WHERE user_id = ?
    `;

      getUserInformation(userId, query, callback);
  }

  getUserAcademicInformation(userId, callback) {
    const query = `SELECT 
                  FROM academic_informations
                  WHERE user_id = ? `;

    getUserInformation(userId, query, callback);
  }

  getUserProfessionalInformation(userId, callback) {
    const query = `SELECT 
                  FROM professional_informations
                  WHERE user_id = ?
    `;
   getUserInformation(userId, query, callback);
  }

  getUserInformation(userId, query, callback) {
     this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);
      const userInformation = results.length > 0 ? results[0] : null;
      callback(null, userInformation);
    });
  }


  updatePersonInformation(userId, data, callback) {
    const query = `CALL sp_update_personal_information(?, ?, ?, ?, ?, ?, ?, ?);`;

    const values = [
      userId,
      data.first_name ?? null,
      data.last_name ?? null,
      data.gender ?? null,
      data.date_of_birth
        ? new Date(data.date_of_birth).toISOString().slice(0, 10)
        : null,
      data.email ?? null,
      data.address ?? null,
      data.pincode ?? null
    ];

    this.db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
    });
  }


  updateProfessionalInformation(userId, data, callback) {
    const query = `CALL sp_update_professional_information(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const values = [
      userId,data.company_name ?? null, data.job_title ?? null,
      data.employment_type ?? null,data.start_date ? new Date(data.start_date).toISOString().slice(0, 19).replace("T", " ") : null,
      data.end_date? new Date(data.end_date).toISOString().slice(0, 19).replace("T", " "): null,
      data.is_current_job ?? null, data.experience_years ?? null, data.location ?? null, data.skills ?? null];

    this.db.query(query, values, (err, results) => {if (err) return callback(err, null);return callback(null, results);});

  updateAcademicInformation(userId, data, callback) {
    const query = `CALL sp_update_academic_information(?, ?, ?, ?, ?, ?, ?);`;

    const values = [
      userId,
      data.stream_name ?? null,
      data.specialization ?? null,
      data.enrollment_year ?? null,
      data.passing_year ?? null,
      data.percentage ?? null,
      data.college_name ?? null
    ];

    this.db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
    });
  }

}

module.exports = UserInformationRepository;