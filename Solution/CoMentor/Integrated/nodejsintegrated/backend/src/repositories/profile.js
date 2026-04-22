const UserNameResponse = require("../dtos/responses/UserNameResponse");

class ProfileRepository {
  constructor(connection) {
    this.connection = connection;
  }


    async getUserProfileById(userId) {
    const query = `
      SELECT  u.id AS user_id, u.contact, u.status, p.first_name, p.last_name,
        p.gender, p.date_of_birth,  p.email, a.enrollment_year,
        a.passing_year,a.percentage,a.college_name, prof.skills
      FROM users u
      LEFT JOIN personal_informations p ON u.id = p.user_id
      LEFT JOIN academic_informations a ON u.id = a.user_id
      LEFT JOIN professional_informations prof ON u.id = prof.user_id
      WHERE u.id = ?`;
    const [rows] = await this.connection.promise().query(query, [userId]);
    return rows[0] || null; 
  }



  updateFullProfile(userId, data, callback) {
    const query = `CALL sp_update_user_complete_profile(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const values = [
      userId,

      // Personal
      data.first_name ?? null, data.last_name ?? null,data.gender ?? null,
      data.date_of_birth ? new Date(data.date_of_birth).toISOString().slice(0, 10) : null,
      data.email ?? null, data.address ?? null, data.pincode ?? null,
       // Professional
      data.company_name ?? null, data.job_title ?? null, data.employment_type ?? null,
      data.start_date? new Date(data.start_date).toISOString().split("T")[0] : null, 
      data.end_date ? new Date(data.end_date).toISOString().split("T")[0]   : null,  
      data.is_current_job ?? null,data.experience_years ?? null, data.location ?? null, data.skills ?? null,

      // Academic
      data.stream_name ?? null, data.specialization ?? null, data.enrollment_year ?? null,
      data.passing_year ?? null,data.percentage ?? null, data.college_name ?? null
     ];

    this.db.query(query, values, (err, results) => {
      if (err) return callback(err, null);
      return callback(null, results);
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


 getProfileName(userNameRequest, callback) {
    const sql =
      "SELECT first_name,last_name FROM personal_informations WHERE user_id=? LIMIT 1;";

    this.connection.query(sql, [userNameRequest.userid], (err, result) => {
      const username = new UserNameResponse(
        result[0].first_name,
        result[0].last_name,
      );

      callback(null, username);
    });
  }
}

module.exports = ProfileRepository;