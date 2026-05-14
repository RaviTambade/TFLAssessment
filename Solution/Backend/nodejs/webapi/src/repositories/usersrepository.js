class UsersRepository {
  constructor(connection) {
    this.connection = connection;
  }

  getUserInformationById(userId, callback) {
    const query = `
      SELECT  u.id AS user_id, u.contact, u.status, p.first_name, p.last_name,
        p.gender, p.date_of_birth,  p.email, a.enrollment_year,
        a.passing_year, a.percentage, a.college_name, prof.skills
      FROM users u
      LEFT JOIN personal_informations p ON u.id = p.user_id
      LEFT JOIN academic_informations a ON u.id = a.user_id
      LEFT JOIN professional_informations prof ON u.id = prof.user_id
      WHERE u.id = ?`;

    this.connection.query(query, [userId], callback);
  }

  getUserCompleteInformation(userId, callback) {
    const query = `CALL sp_get_user_complete_profile(?)`;
    this.connection.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);
      const profile = results[0];
      callback(null, profile);
    });
  }

  getUserPersonalInformation(userId, callback) {
    const query = `SELECT p.first_name, p.last_name, p.gender, p.date_of_birth, p.email, p.address, p.pincode,u.contact
      FROM personal_informations p 
      join users u on u.id = p.user_id
      WHERE user_id = ?`;
    this.getUserInformation(userId, query, callback);
  }

  getUserAcademicInformation(userId, callback) {
    const query = `SELECT enrollment_year, passing_year, percentage, college_name, stream_name, specialization
      FROM academic_informations
      WHERE user_id = ?`;

    this.getUserInformation(userId, query, callback);
  }

  getUserProfessionalInformation(userId, callback) {
    const query = `SELECT company_name, job_title, employment_type, start_date, end_date, is_current_job, experience_years, location, skills
      FROM professional_informations
      WHERE user_id = ?`;

    this.getUserInformation(userId, query, callback);
  }

  getUserInformation(userId, query, callback) {
    this.connection.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);
      const userInformation = results.length > 0 ? results[0] : null;
      callback(null, userInformation);
    });
  }

  

  updateUserPersonalInformation(userId, data, callback) {
    const fields = Object.keys(data) .map((key) => `${key} = ?`) .join(", ");
    const values = Object.values(data);
    const sql = `UPDATE personal_informations SET ${fields} WHERE user_id = ?`;
    this.connection.query(sql, [...values, userId], callback);
  }

  updateUserProfessionalInformation(userId, data, callback) {
    const fields = Object.keys(data) .map((key) => `${key} = ?`) .join(", ");
    const values = Object.values(data);
    const sql = `UPDATE professional_informations SET ${fields} WHERE user_id = ?`;
    this.connection.query(sql, [...values, userId], callback);
  }

  updateUserAcademicInformation(userId, data, callback) {
    const fields = Object.keys(data).map((key) => `${key} = ?`).join(", ");
    const values = Object.values(data);
    const sql = `UPDATE academic_informations SET ${fields} WHERE user_id = ?`;
    this.connection.query(sql, [...values, userId], callback);
  }

  updateUserStatus(userId, status, callback) {
    const sql = "UPDATE users SET status = ? WHERE id = ?";
    this.connection.query(sql, [status, userId], callback);
  }

  getAllUsers(callback) {
    const query = ` SELECT 
        p.user_id, 
        CONCAT(p.first_name, ' ', p.last_name) AS full_name, 
        u.created_at,
        u.status,
        r.role_name
    FROM personal_informations p
    LEFT JOIN user_roles ur ON p.user_id = ur.user_id
    LEFT JOIN roles r ON ur.role_id = r.role_id
    LEFT JOIN users u ON p.user_id = u.id 
    ORDER BY p.user_id;`;
    this.connection.query(query, callback);
  }



// insert personal information
insertUserPersonalInformation(personalInformation, callback) {
  const query = `INSERT INTO personal_informations (user_id, first_name, last_name, gender, date_of_birth, email, address, pincode)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const personalData = [personalInformation.user_id,personalInformation.first_name,personalInformation.last_name,
                        personalInformation.gender,personalInformation.date_of_birth,personalInformation.email,
                        personalInformation.address,personalInformation.pincode];
  this.connection.query(query, personalData, callback);
}


// professional information insert
  insertUserProfessionalInformation(userId, professionalInformation, callback) {
      const columns = Object.keys(professionalInformation).join(", ");
      const placeholders = Object.keys(professionalInformation).map(() => "?").join(", ");
      const values = Object.values(professionalInformation);
      const sql = `INSERT INTO professional_informations (user_id, ${columns}) VALUES (?, ${placeholders}) `;
      this.connection.query(sql, [userId, ...values],callback);
}

// academic information insert
insertUserAcademicInformation(userId, academicInformation, callback) {
    const columns = Object.keys(academicInformation).join(", ");
    const placeholders = Object.keys(academicInformation).map(() => "?").join(", ");
    const academicData = Object.values(academicInformation);
    const sql = `INSERT INTO academic_informations (user_id, ${columns}) VALUES (?, ${placeholders}) `;
    this.connection.query(sql, [userId, ...academicData], callback);
}
}


module.exports = UsersRepository;