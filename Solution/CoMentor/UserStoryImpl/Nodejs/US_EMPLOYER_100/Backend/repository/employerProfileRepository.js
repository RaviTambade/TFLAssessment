class EmployerProfileRepository {
  constructor(db) {
    this.db = db;
  }

  // 1️⃣ Check Employer Role
  checkEmployerRole(userId) {
    const query = `
      SELECT 1 
      FROM user_roles
      WHERE user_id = ? AND role_id = 5
      LIMIT 1
    `;
    return this.db.promise().query(query, [userId]);
  }

  // 2️⃣ Get Employer Profile (Stored Procedure)
  getProfile(userId) {
    const query = `CALL sp_get_user_complete_profile(?)`;
    return this.db.promise().query(query, [userId]);
  }
}

module.exports = EmployerProfileRepository;