class UserRepository {
  constructor(connection) {
    this.connection = connection;
  }

  updateUserProfile(userData) {
    return new Promise((resolve, reject) => {
      const {
        user_id,
        first_name,
        last_name,
        gender,
        date_of_birth,
        email,
        address,
        pincode,
      } = userData;

      const query = 'CALL sp_update_user_profile(?, ?, ?, ?, ?, ?, ?, ?)';

      this.connection.query(
        query,
        [
          user_id,
          first_name,
          last_name,
          gender,
          date_of_birth,
          email,
          address,
          pincode,
        ],
        (err, result) => {
          if (err) {
            return reject(err);
          }

          resolve(result);
        }
      );
    });
  }
}

module.exports = UserRepository;
