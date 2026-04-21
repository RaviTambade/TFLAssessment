class UserProfileRepository {
  constructor(db) {
    this.db = db;
  }

  // Check Employer Role
  checkEmployerRole(userId, callback) {
    const query = `
      SELECT 1 
      FROM user_roles
      WHERE user_id = ? AND role_id = 5
      LIMIT 1
    `;

    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);

      const isEmployer = results.length > 0;
      callback(null, isEmployer);
    });
  }

  // Get Profile
  getProfile(userId, callback) {
    const query = `CALL sp_get_user_complete_profile(?)`;

    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);

      // Extract actual data
      const profile = results[0];

      callback(null, profile);
    });
  }

checkAdminRole(userId, callback) {
    const query = `
      SELECT 1 
      FROM user_roles
      WHERE user_id = ? AND role_id = 1
      LIMIT 1
    `;

    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);

      const iAdmin = results.length > 0;
      callback(null, isAdmin);
    });
  }

  // Get Profile
  getProfile(userId, callback) {
    const query = `CALL sp_get_user_complete_profile(?)`;

    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);

      // Extract actual data
      const profile = results[0];

      callback(null, profile);
    });
  }
}


checkSMERole(userId, callback) {
    const query = `
      SELECT 1 
      FROM user_roles
      WHERE user_id = ? AND role_id = 4
      LIMIT 1
    `;

    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);

      const isSME = results.length > 0;
      callback(null, isSME);
    });
  }

  // Get Profile
  getProfile(userId, callback) {
    const query = `CALL sp_get_user_complete_profile(?)`;

    this.db.query(query, [userId], (err, results) => {
      if (err) return callback(err, null);

      // Extract actual data
      const profile = results[0];

      callback(null, profile);
    });
  }






module.exports = UserProfileRepository;