class UserProfileRepository {

  constructor(db) {
    this.db = db;
  }

  deleteUser(id, status, callback) {
    const sql = "UPDATE Users SET status = ? WHERE id = ?";
    this.connection.query(sql, [status, id], callback);
  }


  getUserRole(userId, callback) {
    const query = `SELECT r.role_name
                  FROM user_roles ur
                  JOIN roles r ON ur.role_id = r.role_id
                  WHERE ur.user_id = ?
    `;

    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);

      const userRole = results.length > 0 ? results[0].role_name : null;
      callback(null, userRole);
    });
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
                  WHERE user_id = ?
    `;

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

  // Get Profile
  getUserProfile(userId, callback) {
    const query = `CALL sp_get_user_complete_profile(?)`;

    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);
      const profile = results[0];
      callback(null, profile);
    });
  }


  
  // ✅ Personal Information
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

    db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
    });
  }

  // ✅ Professional Information
  updateProfessionalInformation(userId, data, callback) {
    const query = `CALL sp_update_professional_information(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const values = [
      userId,
      data.company_name ?? null,
      data.job_title ?? null,
      data.employment_type ?? null,
      data.start_date
        ? new Date(data.start_date).toISOString().slice(0, 19).replace("T", " ")
        : null,
      data.end_date
        ? new Date(data.end_date).toISOString().slice(0, 19).replace("T", " ")
        : null,
      data.is_current_job ?? null,
      data.experience_years ?? null,
      data.location ?? null,
      data.skills ?? null
    ];

    db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
    });
  }

  // ✅ Academic Information
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

    db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
    });
  }

  // ✅ Full Profile Update
  updateFullProfile(userId, data, callback) {
    const query = `CALL sp_update_user_complete_profile(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const values = [
      userId,

      // Personal
      data.first_name ?? null,
      data.last_name ?? null,
      data.gender ?? null,
      data.date_of_birth
        ? new Date(data.date_of_birth).toISOString().slice(0, 10)
        : null,
      data.email ?? null,
      data.address ?? null,
      data.pincode ?? null,

      // Professional
      data.company_name ?? null,
      data.job_title ?? null,
      data.employment_type ?? null,
      data.start_date
        ? new Date(data.start_date).toISOString().split("T")[0]
        : null,
      data.end_date
        ? new Date(data.end_date).toISOString().split("T")[0]
        : null,
      data.is_current_job ?? null,
      data.experience_years ?? null,
      data.location ?? null,
      data.skills ?? null,

      // Academic
      data.stream_name ?? null,
      data.specialization ?? null,
      data.enrollment_year ?? null,
      data.passing_year ?? null,
      data.percentage ?? null,
      data.college_name ?? null
    ];

    db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
    });
  }

}

module.exports = UserProfileRepository;